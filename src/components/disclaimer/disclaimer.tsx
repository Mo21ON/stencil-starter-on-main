import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'disclaimer-component',
  styleUrl: 'disclaimer.css',
  shadow: false,
})
export class Disclaimer {

  @Prop() text: string;

  render() {
    return <div id="disclaimer"><p>{this.text}</p></div>;
  }
}
