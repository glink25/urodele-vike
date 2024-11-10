import type { PageContextServer } from "vike/types";
import { getPageData, getPageListData } from "../../../adapter/reader";

export const data = async (pageContext: PageContextServer) => {
    const route = pageContext.urlPathname
    const id = route.replace('/posts/', '')
    const result = await getPageData(id)
    return result
}

export type Data = Awaited<ReturnType<typeof data>>

export const getPageRoutes = async () => {
    const list = await getPageListData()
    return list.map(p => `/${p.id}`)
}