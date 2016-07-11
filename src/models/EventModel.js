import React from 'react';

export const EventModel = {
  start: React.PropTypes.number.isRequired,
  end: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired,
  location: React.PropTypes.string
};
