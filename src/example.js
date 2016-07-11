import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './components/Calendar/Calendar';


var events = [  {start: 30, end: 150, title: "Breakfast with Sarah", location: "Test123"},
                {start: 540, end: 600, title: "Meeting with John", location: "Sample Text"},
                {start: 560, end: 620, title: "React Meetup", location: "Placeholder text"},
                {start: 610, end: 670, title: "Assignment Due", location: "Something ABC"} ];

ReactDOM.render(
  <Calendar events={events} />,
  document.getElementById('main')
);
