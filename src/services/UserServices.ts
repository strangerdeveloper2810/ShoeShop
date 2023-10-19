import http from "@/utils/setting";
import {UserRegister} from "@/types/User"
export const UserServices = {
    userRegister: async (values: UserRegister) => {
        try {
            return await http.post('/Users/signup', values);
        }catch (error) {
            throw error;
        }
    }
}