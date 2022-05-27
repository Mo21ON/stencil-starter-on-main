import { Component,  h, Host} from '@stencil/core';

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
    label: "Referenzen",
    url: "/ON-your-styleguide/referenzen.html"
  },{
    label: "Impressum",
    url: "/ON-your-styleguide/impressum.html"
  },{
  label: "Datenschutzerklärung",
  url: "/ON-your-styleguide/datenschutz.html"
}];

  render() {
    return <Host id="links">
      {this.links.map((l) =>(<a href={l.url}>{l.label}</a>))}
    </Host>;
  }
}

export interface LinkData{
  label: string;
  url: string;
}

