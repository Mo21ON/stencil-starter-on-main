import { Component, getAssetPath, h, Prop } from '@stencil/core';

@Component({
  tag: 'logo-component',
  styleUrl: 'logo.css',
  shadow: false,
  assetsDirs: ['assets']
})
export class Logo {

  @Prop() imagename: string;

  render() {
    return <div id="logo"><img src={getAssetPath(`./assets/${this.imagename}`)} alt={this.imagename}/></div>;
  }
}