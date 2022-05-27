// Jendrik
import { Component, getAssetPath, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'logo-component',
  styleUrl: 'logo.css',
  shadow: false,
  assetsDirs: ['assets']
})
export class Logo {

  @Prop() imagename: string;

  render() {
    return <Host id="logo"><img src={getAssetPath(`./assets/${this.imagename}`)} alt={this.imagename}/></Host>;
  }
}