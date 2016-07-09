import React from 'react';
import eventModel from '../../models/eventModel';
import DayCalendar from '../DayCalendar/DayCalendar';

class Calendar extends React.Component {
  render() {
    return (
      <DayCalendar events={this.props.events} />
    );
  }
}

Calendar.propTypes = {
  events: React.PropTypes.arrayOf(eventModel)
};

export default Calendar;
