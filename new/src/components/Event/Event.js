import React from 'react';

class Event extends React.Component {

  render() {
    const { event } = this.props;

    const divStyle = {
      top: `${event.start}px`,
      left: `${event.left}px`,
      width: `${event.width}px`,
      height: `${event.end - event.start}px`
    };

    return (
      <div className="event" style={divStyle}>
        <dl>
          <dt>{event.title}</dt>
          <dd>{event.location}</dd>
        </dl>
      </div>
    );
  }
}

Event.propTypes = {
  event: React.PropTypes.object.isRequired
};

export default Event;
