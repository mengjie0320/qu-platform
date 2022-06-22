
// list列表 请求参数
export type ListReq = {
    page: number,
    size: number,
    start_time: string,
    end_time: string,
}

export type CalendarDayList = {
    id: string,
    name: string,
    type: string,
    process: Array<string>,
    needProcess: Array<string>,
}

export type Calendar = {
    curTime: string,
    dayList: Array<CalendarDayList>
}

