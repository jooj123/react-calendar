# React Calendar
React Calendar is a library for displaying a calendar and events

You can display a calendar like below:

```
var ReactCalendar = require('react-calendar')

var data = [ {start: 30, end: 150}, {start: 540, end: 600}, 
             {start: 560, end: 620}, {start: 610, end: 670} ];

React.render(
    <Calendar data={data}/>,
    document.getElementById('day-wrapper')
);

```

You will need to have a div in your html:

```
<div id="day-wrapper"></div>
```

[Click here](https://raw.githubusercontent.com/jooj123/react-calendar/master/examples/calendar.png) to see the generated calendar

The data passed to the component is compromised of an array of objects, each have the properties:
* **start**: this is the start time minutes since 9am
* **end**: this is the end time minutes since 9am


## Run example
```
npm install
grunt serve
```

## Contribute
Please feel free to submit a Pull Request, I would love for you to contribute to **React Calendar**

## TODO
1. Will need to publish as node.js module
2. Tests need to be implemented
3. Functionality for varying times in a day
4. Functionality for multiple day views (currently only supports the view of 1 day)
5. Functionality for events such as onClick, onMouseOver etc on the calendar events
