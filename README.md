# UNMAINTAINED 

# React Calendar
React Calendar is a library for displaying a calendar and events that overlay.
Its designed so that no events will visually overlap

You can display a calendar like below:

```
var React = require("react"),
    Calendar = require("reactcalendar");

var events = [  {start: 30, end: 150, title: "Breakfast with Sarah", location: "Test123"},
                {start: 540, end: 600, title: "Meeting with John", location: "Sample Text"},
                {start: 560, end: 620, title: "React Meetup", location: "Placeholder text"},
                {start: 610, end: 670, title: "Assignment Due", location: "Something ABC"} ];

React.render(
    <Calendar events={events}/>,
    document.getElementById("day-wrapper")
);
```

You will need to have a div in your html (alternatively you can just use document.body):

```
<div id="day-wrapper"></div>
```

[**Click here**](https://raw.githubusercontent.com/jooj123/react-calendar/master/docs/calendar.png) to see the generated calendar

The data passed to the component is compromised of an array of objects, each have the properties:
* **start**: this is the start time minutes since 9am
* **end**: this is the end time minutes since 9am


## Install
React calendar is available as an npm package.
```
npm install reactcalendar
```


## Run example
```
git clone https://github.com/jooj123/react-calendar.git
npm install
npm start
```

## Contribute
This plugin is very much in its early form.
Please feel free to submit a Pull Request, I would love for you to contribute to **React Calendar**

## TODO
1. Tests need to be implemented
2. Functionality for varying times in a day
3. Functionality for multiple day views (currently only supports the view of 1 day)
4. Functionality for events such as onClick, onMouseOver etc on the calendar events
