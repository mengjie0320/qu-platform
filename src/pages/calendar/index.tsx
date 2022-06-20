import React from 'react';
import CalendarSection from '../../components/calendar-section/index';
class Calendar extends React.Component <any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
        time: '',
        calendarList: [
            {
                curTime: '2022-06-14 12:12:22',
                dayList: [
                    {
                        id: 1,
                        name: '按钮审核', // 缩写
                        type: 1, // 工作 1 个人 2
                        desc: '需求，按钮审核', // 准确描述
                        process: [], // 今日进展
                        needProcess: [], // 需要完成事项
                    }
                ]
            }
        ]
      }
      console.log(111);
    }

    render() {
        return (
            <div>
                <span>calendar</span>
                {
                    this.state.calendarList.map((item: any, index: number) => {
                        if(index === 0 || (index + 1) % 7 === 0) {
                            return <div className="each-weak" key={`eachweek${index}`}>
                                <span>hhh</span>
                                {
                                    this.state.calendarList.slice(index, index+7).map((weakItem: any, weekIndex: number) => {
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
}
export default Calendar