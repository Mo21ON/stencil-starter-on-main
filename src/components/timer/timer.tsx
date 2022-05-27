import { Component, h, Host, Prop, State } from '@stencil/core';

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;

@Component({
  tag: 'timer-component',
  styleUrl: 'timer.css',
  shadow: false,
})
export class Timer {
  @State() remainingTimeInMs : number = 0;

  @State() timer : number;

  @Prop() hours: string = "4";

  connectedCallback(){
    this.timer = window.setInterval(this.updateTimer.bind(this), 1000);
  }

  updateTimer(){
    if(this.remainingTimeInMs - 1000 <= 0){
      this.remainingTimeInMs = 0;
    }
    else{
      this.remainingTimeInMs -= 1000;
    }
  }

  disconnectedCallback(){
    window.clearInterval(this.timer);
  }

  componentWillLoad(){
    let hours = parseInt(this.hours);
    if(isNaN(hours) || hours <= 0){
      throw new Error("wrong hour format in timer-component");
    }
    this.remainingTimeInMs = hours * HOUR;
  }

  getRemainingHours(){
    return Math.floor(this.remainingTimeInMs / HOUR);
  }

  getRemainingMinutes(){
    let remainingTimeMinusHours = this.remainingTimeInMs - (this.getRemainingHours()*HOUR);
    return Math.floor(remainingTimeMinusHours / MINUTE);
  }

  getRemainingSeconds(){
    let remainingTimeMinusHoursAndMin = this.remainingTimeInMs - (this.getRemainingHours()*HOUR) - (this.getRemainingMinutes()*MINUTE);
    return Math.floor(remainingTimeMinusHoursAndMin / SECOND);
  }

  render() {
    return <Host class="timer">
      <div class="hours">{this.getRemainingHours()}</div>
      <div>:</div>
      <div class="minutes">{this.getRemainingMinutes()}</div>
      <div>:</div>
      <div class="seconds">{this.getRemainingSeconds()}</div>
    </Host>;
  }
}
