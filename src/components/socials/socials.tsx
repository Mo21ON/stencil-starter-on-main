import { Component, getAssetPath, h } from '@stencil/core';

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
    to: "http://test.de/"
  },{
    alt: "Instagram",
    imgsrc: getAssetPath(`./assets/instagram.png`),
    to: "http://test.de/"
  }];

  render() {
    return <div id="socials">
      {this.socialdata.map((d) => <a class="social" href={d.to}><img alt={d.alt} src={d.imgsrc}/></a>)}
    </div>;
  }
}