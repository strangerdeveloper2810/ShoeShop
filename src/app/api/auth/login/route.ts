import _ from "lodash";
import { cookies } from 'next/headers';
import { UserServices } from '@/services/UserServices';
import { ACCESS_TOKEN } from '@/utils/setting';

export async function POST(request: Request) {
    const cookie = cookies();
    const res = await request.json();
    try {
        const response = await UserServices.userLogin(res);

        const accessToken = _.get(response, "data.content.accessToken", "");
        cookie.set(ACCESS_TOKEN, accessToken, { maxAge: 60 * 60 * 24 * 30, sameSite: 'strict', path: '/', httpOnly: true });

        if (_.isEmpty(accessToken)) {
            return Response.json(
                { message: "Don't has accessToken" },
                { status: 400 }
            )
        }
        return Response.json({ message: 'Login Successfully', accessToken }, {
            status: 200,
            headers: {
                'Set-Cookie': `accessToken=${accessToken}`
            }
        });
    } catch (error) {
        return Response.json({ message: 'Login Failed' }, { status: 400 });
    }

}