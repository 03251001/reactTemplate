declare namespace API {
    type Resp<T> = {
        data: T;
        code: number;
        msg: string;
        success:boolean
    };

    type RespList<T> = {
        data: {
            rows: T[];
            total: number
            page: number
            pageSize: number
        };
        code: number;
        msg: string;
        success:boolean
    };
}