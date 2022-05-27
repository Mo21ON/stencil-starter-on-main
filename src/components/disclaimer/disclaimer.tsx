//Felix
import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'disclaimer-component',
  styleUrl: 'disclaimer.css',
  shadow: false,
})
export class Disclaimer {

  @Prop() text: string;

  render() {
    return <Host id="disclaimer"><p>{this.text}</p></Host>;
  }
}
