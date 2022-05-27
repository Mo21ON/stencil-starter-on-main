// Jendrik

import { Component,  h, Host } from '@stencil/core';

@Component({
  tag: 'main-content-component',
  styleUrl: 'main-content.css',
  shadow: false,
})
export class MainContent {


  render() {
    return <Host id="main"><slot/></Host>;
  }
}