import {BaseServices} from "./baseServices";

export class ProductServices extends BaseServices {
    
    getAllProduct = () => {
        return this.get(`api/Product`);
    };

    getProductDetail = (id: string) => {
        return this.get(`api/Product/getbyid?id=${id}`);
    }
}

export const productApi = new ProductServices();