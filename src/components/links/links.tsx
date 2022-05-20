import { Component,  h } from '@stencil/core';

@Component({
  tag: 'links-head-component',
  styleUrl: 'links.css',
  shadow: false,
})
export class LinksHeader {
  private links: LinkData[] = [{
    label: "Über uns",
    url: "http://test.de/"
  },{
    label: "Impressum",
    url: "http://test1.de/"
  },{
    label: "Produkte",
    url: "http://test2.de/"
  },{
    label: "Mitglieder",
    url: "http://test2.de/"
  }];

  render() {
    return <div id="links">
      {this.links.map((l) =>(<a href={l.url}>{l.label}</a>))}
    </div>;
  }
}

interface LinkData{
  label: string;
  url: string;
}

