import http from "@/utils/setting";

export const productServices = {
    // getProduct: async(pageIndex:number, pageSize: number) => {
    //     const response = await http.get("/Product/getpaging", {
    //         params: {
    //             pageIndex,
    //             pageSize
    //         }
    //     })
    //     return response.data
    // }

    getAllProduct: async () => {
        const response = await http.get('/Product')
        return response.data
    }
}

