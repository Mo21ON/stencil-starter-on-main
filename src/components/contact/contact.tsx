import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'contact-component',
  styleUrl: 'contact.css',
  shadow: false,
})
export class Contact {

  @Prop() mail: string;

  render() {
    return <div id="contact"><a href={'mailto:'+this.mail}>{this.mail}</a></div>;
  }
}