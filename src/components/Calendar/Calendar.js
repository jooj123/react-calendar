import React from 'react';
import { EventModel } from '../../models/EventModel';
import DayCalendar from '../DayCalendar/DayCalendar';

class Calendar extends React.Component {
  render() {
    return (
      <DayCalendar events={this.props.events} />
    );
  }
}

Calendar.propTypes = {
  events: React.PropTypes.arrayOf(React.PropTypes.shape(EventModel))
};

export default Calendar;
