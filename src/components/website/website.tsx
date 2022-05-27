
// Heiko
import { Component, h, Host} from '@stencil/core';

@Component({
  tag: 'website-component',
  styleUrl: 'website.css',
  shadow: false,
})
export class Website {
  render() {
    return (<Host id="main"><slot/></Host>);
  }
}