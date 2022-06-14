import React from 'react';
class CalendarSection extends React.Component <any, any> {
    constructor(props: any) {
      super(props);
      console.log('props', props);
      this.state = {
      }
      console.log(222);
    }

    render() {
        return (
            <p>{this.props.curTime}</p>
        )
    }
}
export default CalendarSection