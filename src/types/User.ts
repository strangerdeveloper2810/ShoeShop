export interface UserRegister {
    email: string,
    password: string,
    name: string,
    gender: boolean,
    phone: string
}

export interface UserLogin {
    email: string,
    password: string,
}