import { Component, h } from '@stencil/core';

@Component({
  tag: 'header-component',
  styleUrl: 'header.css',
  shadow: true,
})
export class Header {
  render() {
    return <div id="header"><slot/></div>;
  }
}