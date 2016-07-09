import React from 'react';

class EventList extends React.Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    this.setState({events: this.generateCalendarEvents()});
  }

  generateCalendarEvents() {
    const events = this.props.events;
    const eventsNode = this.getDOMNode();

    // calculate the width of the target (for reuse)
    const style = window.getComputedStyle(eventsNode);
    const targetWidth = eventsNode.offsetWidth -
      (parseInt(style.getPropertyValue('padding-left'), 10) + parseInt(style.getPropertyValue('padding-right'), 10) );

    let columns = [];
    let lastEventEnding = null;

    events.sort(this.sort);

    const eventLength = events.length;
    for (let index = 0; index < eventLength; index++) {
      if (lastEventEnding !== null && events[index].start >= lastEventEnding) {
        this.calculatePositionAndWidth(columns, targetWidth);
        columns = [];
        lastEventEnding = null;
      }

      let placed = false;
      for (let colIndex = 0; colIndex < columns.length; colIndex++) {
        const col = columns[colIndex];
        if (!this.collidesWith(col[col.length - 1], events[index])) {
          col.push(events[index]);
          placed = true;
          break;
        }
      }

      if (!placed) {
        columns.push([events[index]]);
      }

      if (lastEventEnding === null || events[index].end > lastEventEnding) {
        lastEventEnding = events[index].end;
      }
    }

    if (columns.length > 0) {
      this.calculatePositionAndWidth(columns, targetWidth);
    }

    return events;
  }

  sort(event1, event2) {
    // by start time and then by end time
    if (event1.start < event2.start) {
      return -1;
    }

    if (event1.start > event2.start) {
      return 1;
    }

    if (event1.end < event2.end) {
      return -1;
    }

    if (event1.end > event2.end) {
      return 1;
    }

    return 0;
  }

  collidesWith(first, second) {
    return first.end > second.start && first.start < second.end;
  }

  // set left and width for each event in the associated group
  calculatePositionAndWidth(columns, width) {
    const colLength = columns.length;

    for (let index = 0; index < colLength; index++) {
      const col = columns[index];
      for (let colIndex = 0; colIndex < col.length; colIndex++) {
        const eventBox = col[colIndex];
        eventBox.left = index * (width / colLength);
        eventBox.width = width / colLength;
      }
    }
  }

  render() {
    const calendarEvents = this.state.events.map((event, key) => {
      return (
        <Event event={event} key={key} />
      );
    });

    return (
      <div className="events-wrapper">
        {calendarEvents}
      </div>
    );
  }
}

EventList.propTypes = {
  events: React.PropTypes.array.isRequired
};

export default EventList;

