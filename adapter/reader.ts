import { JSONContent } from "@tiptap/core";
import { getSSRHTML } from "../editor/extensions";
import { parseIntro, parseMeta, pathToId } from "../shared/transform";
import { readdir, readFile } from "fs/promises";

export const getPageListData = async () => {
    const dir = await readdir("./posts", { withFileTypes: true });
    const pageFiles = await Promise.all(
        dir
            .filter((v) => v.isFile() && v.name.endsWith(".json"))
            .map(async (v) => {
                const file = await readFile(`./posts/${v.name}`, { encoding: "utf-8" });
                return [v.name, JSON.parse(file)] as [string, JSONContent];
            })
    );
    // const tags = new Set<string>();

    const rawPageData = await Promise.all(
        pageFiles.map(async ([path, content]) => {
            const meta = parseMeta(content);
            // meta.tags.forEach((t) => tags.add(t));
            return {
                // content: JSON.stringify(content),
                ...meta,
                id: pathToId(path),
                path,
                intro: parseIntro(content) ?? "",
                // html: getSSRHTML(content),
            };
        })
    );
    const pageData = rawPageData.sort((a, b) => b.createTime - a.createTime);
    return pageData
};

export const getPageData = async (id: string) => {
    const text = await readFile(`./posts/${decodeURIComponent(id)}.json`, { encoding: "utf-8" });
    const content = JSON.parse(text);
    const meta = parseMeta(content);
    return {
        content: text,
        ...meta,
        id,
        path: `/pages/${id}.json`,
        intro: parseIntro(content) ?? "",
        html: getSSRHTML(content),
    };
};