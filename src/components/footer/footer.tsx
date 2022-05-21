import { Component,  h } from '@stencil/core';

@Component({
  tag: 'footer-component',
  styleUrl: 'footer.css',
  shadow: false,
})

export class Footer {
  render() {
    return <div id="footer"><slot/></div>;
  }
}

