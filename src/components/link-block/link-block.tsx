import { Component, h, Prop, State, Watch, Host } from '@stencil/core';
import { LinkData } from '../links/links';

@Component({
    tag: 'link-block',
    styleUrl: 'link-block',
    shadow: false,
})
export class LinkBlock {

    @State() data: LinkData[] = [];

    @Prop() links: string;

    @Watch('links')
    dataDidChangeHandler() {
        console.log("change");
        this.data = JSON.parse(this.links);
    }

    componentWillLoad() {
        this.dataDidChangeHandler();
    }

    render() {
        console.log("render");
        return (
            <Host class="footer-links">
                <ul>
                    {this.data.map((l) => (<li><a href={l.url}>{l.label}</a></li>))}
                </ul>
            </Host>
        );
    }

}