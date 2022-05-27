// Heiko

import { Component, getAssetPath, h, Host } from '@stencil/core';

interface SocialData{
  alt: string;
  imgsrc: string;
  to: string;
}

@Component({
  tag: 'socials-component',
  styleUrl: 'socials.css',
  shadow: false,
  assetsDirs: ["assets"]
})
export class Socials {

  private socialdata: SocialData[] = [{
    alt: "Facebook",
    imgsrc:getAssetPath(`./assets/facebook.png`),
    to: "http://www.facebook.com/"
  },{
    alt: "Instagram",
    imgsrc: getAssetPath(`./assets/instagram.png`),
    to: "http://www.instagram.com/"
  }];

  render() {
    return <Host id="socials">
      {this.socialdata.map((d) => <a class="social" href={d.to}><img alt={d.alt} src={d.imgsrc}/></a>)}
    </Host>;
  }
}