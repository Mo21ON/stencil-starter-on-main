import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'link-component',
  styleUrl: 'link.css',
  shadow: true,
})
export class Link {

  @Prop() link: string;
  @Prop() text: string;

  render() {
    return <a href={this.link}>{this.text}</a>;
  }
}
// Komponente Stand 17.05.2022