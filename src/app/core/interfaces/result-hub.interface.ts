export interface IResultHub<T> {
    isSuccess: boolean;
    message?: string;
    content?: T;
    pager?: any;
    httpStatusCode: number;
  }