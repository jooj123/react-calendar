import React from 'react';
import DayOfTheWeek from '../DayOfTheWeek/DayOfTheWeek';

class DayCalendar extends React.Component {
  render() {
    return (
      <div>
        <DayOfTheWeek />
        <CalendarEvents events={this.props.events} />
      </div>
    );
  }
}

export default DayCalendar;