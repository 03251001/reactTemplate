declare namespace API {
    type Resp<T> = {
        data: T;
        code: number;
        msg: string;
        success:boolean
    };
}