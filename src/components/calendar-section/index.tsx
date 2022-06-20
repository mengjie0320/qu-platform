import React from 'react';

import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

import './index.css';





const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};


class CalendarSection extends React.Component <any, any> {
    constructor(props: any) {
      super(props);
      console.log('props', props);
      this.state = {
      }
      console.log(222);
    }

    onChange(e: CheckboxChangeEvent) {
        console.log(`checked = ${e.target.checked}`);
    };

    render() {
        return (
            <div className="day">
                <div className="day-head">
                    <div className="day-head-left">
                        <p>{this.props.eachCalendar.curTime}</p>
                    </div>
                    <div className="day-head-right">
                        
                    </div>
                </div>
                <div className="day-body">
                    {
                        this.props.eachCalendar.dayList.map((item: any, index: number) => {
                            return <Checkbox onChange={onChange} key={`checkbox${index}`}>{item.name}</Checkbox>
                        })
                    }
                </div>
                <div className="day-foot">

                </div>
            </div>
        )
    }
}
export default CalendarSection