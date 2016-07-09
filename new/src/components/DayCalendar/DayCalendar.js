import React from 'react';
import DayOfTheWeek from '../DayOfTheWeek/DayOfTheWeek';
import EventList from '../EventList/EventList';
import eventModel from '../../models/eventModel';

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
  events: React.PropTypes.arrayOf(eventModel)
};

export default DayCalendar;
