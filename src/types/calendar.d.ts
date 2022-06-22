// list列表 请求参数
export type ListReq = {
    page: number,
    size: number,
    startTime: string,
    endTime: string,
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

  
