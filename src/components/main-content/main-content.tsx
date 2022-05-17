import { Component,  h } from '@stencil/core';

@Component({
  tag: 'main-content-component',
  styleUrl: 'main-content.css',
  shadow: true,
})
export class MainContent {


  render() {
    return <div id="main"><slot/></div>;
  }
}