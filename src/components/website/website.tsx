import { Component, h, } from '@stencil/core';

@Component({
  tag: 'website-component',
  styleUrl: 'website.css',
  shadow: false,
})
export class Website {
  render() {
    return (<div id="main"><slot/></div>);
  }
}