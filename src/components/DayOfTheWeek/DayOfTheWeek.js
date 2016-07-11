import React from 'react';
import style from './DayOfTheWeek.css';

class DayOfTheWeek extends React.Component {
  render() {
    return (
      <ul className={style.times}>
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
}

export default DayOfTheWeek;
