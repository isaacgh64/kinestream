
export type LogInType = {
    mail: string,
    password: string,
}

export type RegisterType = {
    name: string,
    mail: string,
    password: string,
    repassword: string,
}

export type LogInTypePage = {
   register: boolean,
}

export type ShowPasswordType = {
    show: boolean,
    showre:boolean,
}

export type UserType = {
    name: string,
    mail: string,
}