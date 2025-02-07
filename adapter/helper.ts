import { PageData } from "@/shared/type";

export type ReadPageByPath = (path: string) => Promise<PageData>;
export type WritePage = (
  path: string,
  data: Pick<PageData, "content" | "title" | "tags" | "createTime"> & Partial<Pick<PageData, "path">>,
  assets: { name: string; url: string; file: File }[]
) => Promise<void>;
