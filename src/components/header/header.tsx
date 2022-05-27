import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'header-component',
  styleUrl: 'header.css',
  shadow: false,
})
export class Header {
  render() {
    return <Host id="header"><slot/></Host>;
  }
}