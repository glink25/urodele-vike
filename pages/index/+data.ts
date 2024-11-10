import { getPageListData } from "@/adapter/reader"

export const data = async () => {
    const x = await getPageListData()
    console.log(x)
    return {
        data: x
    }
}