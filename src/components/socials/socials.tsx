import { Component, h } from '@stencil/core';

@Component({
  tag: 'socials-component',
  styleUrl: 'socials.css',
  shadow: true,
})
export class Socials {

  render() {
    return <div id="socials"></div>;
  }
}