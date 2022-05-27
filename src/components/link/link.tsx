//Moritz
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'link-component',
  styleUrl: 'link.css',
  shadow: false,
})
export class Link {

  @Prop() link: string;
  @Prop() text: string;

  render() {
    return <a href={this.link}>{this.text}</a>;
  }
}
