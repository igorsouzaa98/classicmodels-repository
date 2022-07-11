export interface AppErrorArgs{
    name:string
    httpCode?: number
    message:string
}

export default class AppError extends Error{
    name:string
    httpCode:number

    constructor(name:string, message:string, httpCode:number) {
        super(message)
        this.name = name
        this.httpCode = httpCode
    }

    getHttpCode(){
        return this.httpCode
    }
    getError(): AppErrorArgs {
        return {
            name:this.name,
            httpCode:this.httpCode,
            message:this.message
        }
    }
}