# React Calendar
React Calendar is a library for displaying a calendar and events

You can display a calendar like below:

```
var ReactCalendar = require('react-calendar')

var data = [ {start: 30, end: 150}, {start: 540, end: 600}, {start: 560, end: 620}, {start: 610, end: 670} ];

React.render(
    <Calendar data={data}/>,
    document.getElementById('day-wrapper')
);

```

You will need to have a div in your html:

```
<div id="day-wrapper"></div>
```

The data passed to the component is compromised of an array of objects, each have the properties:
* **start**: this is the start time minutes since 9am
* **end**: this is the end time minutes since 9am


## Run example


WORK IN PROGRESS
## TODO
