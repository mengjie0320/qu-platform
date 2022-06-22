declare interface Resp<T = null> {
    result: Partial<T>;
    retcode: number;
    msg?: string;
    shortRequestId?: string;
  }

declare type PagePsp<T> = Resp<{
    list: T[];
    count: number;
  }>;

declare interface Dictionary<T> {
    [propName: string]: T;
  }