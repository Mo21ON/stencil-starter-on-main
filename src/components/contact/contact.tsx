//Felix

import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'contact-component',
  styleUrl: 'contact.css',
  shadow: false,
})
export class Contact {

  @Prop() mail: string;

  render() {
    return <Host id="contact"><a href={'mailto:'+this.mail}>{this.mail}</a>;

    <p>Tel.: 06261 9390</p>
    <p> </p>
    <p>MOS-Fit Consulting Gmbh</p>
    <p> </p>
    <p>Winkelgasse 5A</p>
    <p> </p>
    <p>74821 Mosbach</p></Host>;
  }
}