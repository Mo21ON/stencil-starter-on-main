import { Component,  h, Host } from '@stencil/core';

@Component({
  tag: 'footer-component',
  styleUrl: 'footer.css',
  shadow: false,
})

export class Footer {
  render() {
    return <Host id="footer"><slot/></Host>;
  }
}

