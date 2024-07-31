import _ from "lodash";
import { productServices } from "@/services/ProductServices";
export async function GET() {
    try {
        const response = await productServices.getAllProduct();
        const data = _.get(response, "content", []);
        return Response.json({ data }, { status: 200 });
    }
    catch (error) {
        console.log(error);
    }
}