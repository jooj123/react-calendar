var CalendarTimes = React.createClass({
    render: function() {
        return (
            <ul className="times">
                <li>9:00<small>AM</small></li>
                <li>9:30</li>
                <li>10:00<small>AM</small></li>
                <li>10:30</li>
                <li>11:00<small>AM</small></li>
                <li>11:30</li>
                <li>12:00<small>PM</small></li>
                <li>12:30</li>
                <li>1:00<small>PM</small></li>
                <li>1:30</li>
                <li>2:00<small>PM</small></li>
                <li>2:30</li>
                <li>3:00<small>PM</small></li>
                <li>3:30</li>
                <li>4:00<small>PM</small></li>
                <li>4:30</li>
                <li>5:00<small>PM</small></li>
                <li>5:30</li>
                <li>6:00<small>PM</small></li>
                <li>6:30</li>
                <li>7:00<small>PM</small></li>
                <li>7:30</li>
                <li>8:00<small>PM</small></li>
                <li>8:30</li>
                <li>9:00<small>PM</small></li>
            </ul>
        ); 
    }
});

var CalendarEvent = React.createClass({

    propTypes: {
        event: React.PropTypes.object.isRequired
    },
    render: function() {
        var divStyle = {
            top: this.props.event.start + 'px',
            left: this.props.event.left + 'px',
            width: this.props.event.width + 'px', 
            height: this.props.event.end - this.props.event.start + 'px' 
        };

        return (
            <div className="event" style={divStyle}>
                <dl>
                    <dt>{this.props.event.title}</dt>
                    <dd>{this.props.event.location}</dd>
                </dl>
            </div>
        );
    }
})

var CalendarEventList = React.createClass({

    propTypes: {
        events: React.PropTypes.array.isRequired
    },
    render: function() {
        var calendarEvents = this.props.events.map(function (event, key) {
            return (
                <CalendarEvent event={event} key={key} />
            );
        });
        return (
            <div className="events-wrapper">
                {calendarEvents}
            </div>
        );
    }
})

var CalendarEvents = React.createClass({

    propTypes: {
        events: React.PropTypes.array.isRequired
    },
    generateCalendarEvents: function() {

        var events = this.props.events;
        var eventsNode = this.getDOMNode();

        // calculate the width of the target (for reuse)
        var style = window.getComputedStyle(eventsNode);
        var targetWidth = eventsNode.offsetWidth - 
            (parseInt(style.getPropertyValue('padding-left'), 10) + parseInt(style.getPropertyValue('padding-right'), 10) );

        var columns = [];
        var lastEventEnding = null;

        events.sort(this.sort);

        var eventLength = events.length;
        for (var i = 0;i < eventLength;i++) {

            if (lastEventEnding !== null && events[i].start >= lastEventEnding) {
                this.calculatePositionAndWidth(columns, targetWidth);
                columns = [];
                lastEventEnding = null;
            }

            var placed = false;
            for (var j = 0; j < columns.length; j++) {      
                var col = columns[j];
                if (!this.collidesWith(col[col.length-1], events[i])) {
                    col.push(events[i]);
                    placed = true;
                    break;
                }
            }

            if (!placed) {
                columns.push([events[i]]);
            }

            if (lastEventEnding === null || events[i].end > lastEventEnding) {
                lastEventEnding = events[i].end;
            }
        }

        if (columns.length > 0) {
            this.calculatePositionAndWidth(columns, targetWidth);
        }

        return events;
    },
    sort: function(event1, event2) {

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
    },
    collidesWith: function(a, b) {
        return a.end > b.start && a.start < b.end;
    },
    // set left and width for each event in the associated group
    calculatePositionAndWidth: function(columns, width) {

        var n = columns.length;

        for (var i = 0; i < n; i++) {
            var col = columns[i];
            for (var j = 0; j < col.length; j++)
            {
                var eventBox = col[j];
                eventBox.left = i*(width/n);
                eventBox.width = width/n;
            }
        }
    },
    componentDidMount: function() {
        this.setState({events: this.generateCalendarEvents()});
    },
    getInitialState: function() {
        return {events: []};
    },
    render: function() {
        return (
            <CalendarEventList events={this.state.events} />
        );
    }
});

var Calendar = React.createClass({
    propTypes: {
        events: React.PropTypes.array.isRequired
    },
    render: function() {
        return (
            <div>
                <CalendarTimes />
                <CalendarEvents events={this.props.events}/>
            </div>
        );
    }
});


var events = [  {start: 30, end: 150, title: 'Breakfast with Sarah', location: 'Test123'}, 
                {start: 540, end: 600, title: 'Meeting with John', location: 'Sample Text'}, 
                {start: 560, end: 620, title: 'React Meetup', location: 'Placeholder text'}, 
                {start: 610, end: 670, title: 'Assignment Due', location: 'Something ABC'} ];

React.render(
    <Calendar events={events}/>,
    document.getElementById('day-wrapper')
);