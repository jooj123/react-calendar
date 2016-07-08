import React from 'react';
import eventModel from '../../models/eventModel';

class Calendar extends React.Component {
  render() {
    return (
      <div>
        <CalendarTimes />
        <CalendarEvents events={this.props.events} />
      </div>
    );
  }
}

Calendar.propTypes = {
  events: React.PropTypes.arrayOf(eventModel)
};

export default Calendar;
