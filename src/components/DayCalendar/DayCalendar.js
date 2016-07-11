import React from 'react';
import DayOfTheWeek from '../DayOfTheWeek/DayOfTheWeek';
import EventList from '../EventList/EventList';
import { EventModel } from '../../models/EventModel';

class DayCalendar extends React.Component {
  render() {
    return (
      <div>
        <DayOfTheWeek />
        <EventList events={this.props.events} />
      </div>
    );
  }
}

DayCalendar.propTypes = {
  events: React.PropTypes.arrayOf(React.PropTypes.shape(EventModel))
};

export default DayCalendar;
