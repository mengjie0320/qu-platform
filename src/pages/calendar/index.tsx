import React, { useEffect, useState } from 'react';
import CalendarSection from '../../components/calendar-section/index';
import * as api from '../../api';

// {
//     time: '',
//     calendarList: [
//         {
//             curTime: '2022-06-14 12:12:22',
//             dayList: [
//                 {
//                     id: 1,
//                     name: '按钮审核', // 缩写
//                     type: 1, // 工作 1 个人 2
//                     desc: '需求，按钮审核', // 准确描述
//                     process: [], // 今日进展
//                     needProcess: [], // 需要完成事项
//                 }
//             ]
//         }
//     ]
//   }

const Calendar = (props: any) => {
    const [time, setTime] = useState('');
    const [calendarList, setCalendarList] = useState<Array<any>>([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    useEffect(() => {
        const res = api.getCanlendarList({
            page,
            size,
            startTime,
            endTime
        })
    })

    return (
        <div>
            <span>calendar</span>
            {
                calendarList.map((item: any, index: number) => {
                    if(index === 0 || (index + 1) % 7 === 0) {
                        return <div className="each-weak" key={`eachweek${index}`}>
                            <span>hhh</span>
                            {
                                calendarList.slice(index, index+7).map((weakItem: any, weekIndex: number) => {
                                    return <CalendarSection eachCalendar={weakItem} key={`${index}-${weekIndex}`}></CalendarSection>
                                })
                            }
                        </div>
                    }
                })
            }
        </div>
    )
}

export default Calendar