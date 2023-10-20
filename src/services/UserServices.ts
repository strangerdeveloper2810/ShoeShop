import http from "@/utils/setting";
import {UserRegister, UserLogin} from "@/types/User"
export const UserServices = {
    userRegister: async (values: UserRegister) => {
        try {
            return await http.post('/Users/signup', values);
        }catch (error) {
            throw error;
        }
    },
    userLogin : async (values: UserLogin)=> {
        try {
            return await http.post("/Users/signin", values)
        }catch(error) {
            throw error;
        }
    }
}