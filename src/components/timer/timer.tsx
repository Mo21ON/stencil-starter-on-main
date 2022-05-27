import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'timer-component',
  styleUrl: 'timer.css',
  shadow: false,
})
export class Timer {
  render() {
    return <Host id='footer'>
      <slot />
    </Host>;
  }
}