import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'headline-container',
  styleUrl: 'headline-container.css',
  shadow: false,
})
export class HeadlineContainer {

  @Prop() headline: string;
  @Prop() type: string;

  render() {
    let HeadLineTag = `${this.type}`;
    return <Host class="hl-container">
      <HeadLineTag>{this.headline}</HeadLineTag>
      <div class="hl-child">
      <slot/></div></Host>;
  }
}
