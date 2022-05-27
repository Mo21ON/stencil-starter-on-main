import { Component,  h } from '@stencil/core';

@Component({
  tag: 'links-head-component',
  styleUrl: 'links.css',
  shadow: false,
})
export class LinksHeader {
  private links: LinkData[] = [{
    label: "Home",
    url: "/ON-your-styleguide/index.html"
  },{
    label: "Produkte",
    url: "/ON-your-styleguide/produkte.html"
  },{
    label: "Referenzen",
    url: "/ON-your-styleguide/referenzen.html"
  },{
    label: "Über uns",
    url: "/ON-your-styleguide/ueber-uns.html"
  },{
    label: "Impressum",
    url: "/ON-your-styleguide/impressum.html"
  },{
  label: "Datenschutzerklärung",
  url: "/ON-your-styleguide/datenschutz.html"
}];

  render() {
    return <div id="links">
      {this.links.map((l) =>(<a href={l.url}>{l.label}</a>))}
    </div>;
  }
}

export interface LinkData{
  label: string;
  url: string;
}

