import _ from "lodash";
import { UserServices } from '@/services/UserServices';
export async function POST(request: Request) {
    const res = await request.json();
    try {
        const response = await UserServices.userRegister(res);
        const message = _.get(response, "data.message", "");
        return Response.json({ message }, { status: 200 });
    } catch (error: Error | any) {
        const { response } = error;
        const { data } = response;
        const message = _.get(data, "message", "");
        return Response.json({ message }, { status: 400 });
    }

}