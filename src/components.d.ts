/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
 import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
 export namespace Components {
     interface ContentAreaComponent {
     }
     interface ExampleComponent {
         "exampleProp": string;
         "exampleToUpperCase": () => Promise<void>;
     }
     interface FooterComponent {
     }
     interface HeaderComponent {
     }
     interface LinkComponent {
         "link": string;
         "text": string;
     }
     interface LinksHeadComponent {
     }
     interface LogoComponent {
     }
     interface MainContentComponent {
     }
     interface MyComponent {
         /**
           * The first name
          */
         "first": string;
         /**
           * The last name
          */
         "last": string;
         /**
           * The middle name
          */
         "middle": string;
     }
     interface SlideshowComponent {
     }
     interface SocialsComponent {
     }
     interface WebsiteComponent {
     }
 }
 declare global {
     interface HTMLContentAreaComponentElement extends Components.ContentAreaComponent, HTMLStencilElement {
     }
     var HTMLContentAreaComponentElement: {
         prototype: HTMLContentAreaComponentElement;
         new (): HTMLContentAreaComponentElement;
     };
     interface HTMLExampleComponentElement extends Components.ExampleComponent, HTMLStencilElement {
     }
     var HTMLExampleComponentElement: {
         prototype: HTMLExampleComponentElement;
         new (): HTMLExampleComponentElement;
     };
     interface HTMLFooterComponentElement extends Components.FooterComponent, HTMLStencilElement {
     }
     var HTMLFooterComponentElement: {
         prototype: HTMLFooterComponentElement;
         new (): HTMLFooterComponentElement;
     };
     interface HTMLHeaderComponentElement extends Components.HeaderComponent, HTMLStencilElement {
     }
     var HTMLHeaderComponentElement: {
         prototype: HTMLHeaderComponentElement;
         new (): HTMLHeaderComponentElement;
     };
     interface HTMLLinkComponentElement extends Components.LinkComponent, HTMLStencilElement {
     }
     var HTMLLinkComponentElement: {
         prototype: HTMLLinkComponentElement;
         new (): HTMLLinkComponentElement;
     };
     interface HTMLLinksHeadComponentElement extends Components.LinksHeadComponent, HTMLStencilElement {
     }
     var HTMLLinksHeadComponentElement: {
         prototype: HTMLLinksHeadComponentElement;
         new (): HTMLLinksHeadComponentElement;
     };
     interface HTMLLogoComponentElement extends Components.LogoComponent, HTMLStencilElement {
     }
     var HTMLLogoComponentElement: {
         prototype: HTMLLogoComponentElement;
         new (): HTMLLogoComponentElement;
     };
     interface HTMLMainContentComponentElement extends Components.MainContentComponent, HTMLStencilElement {
     }
     var HTMLMainContentComponentElement: {
         prototype: HTMLMainContentComponentElement;
         new (): HTMLMainContentComponentElement;
     };
     interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
     }
     var HTMLMyComponentElement: {
         prototype: HTMLMyComponentElement;
         new (): HTMLMyComponentElement;
     };
     interface HTMLSlideshowComponentElement extends Components.SlideshowComponent, HTMLStencilElement {
     }
     var HTMLSlideshowComponentElement: {
         prototype: HTMLSlideshowComponentElement;
         new (): HTMLSlideshowComponentElement;
     };
     interface HTMLSocialsComponentElement extends Components.SocialsComponent, HTMLStencilElement {
     }
     var HTMLSocialsComponentElement: {
         prototype: HTMLSocialsComponentElement;
         new (): HTMLSocialsComponentElement;
     };
     interface HTMLWebsiteComponentElement extends Components.WebsiteComponent, HTMLStencilElement {
     }
     var HTMLWebsiteComponentElement: {
         prototype: HTMLWebsiteComponentElement;
         new (): HTMLWebsiteComponentElement;
     };
     interface HTMLElementTagNameMap {
         "content-area-component": HTMLContentAreaComponentElement;
         "example-component": HTMLExampleComponentElement;
         "footer-component": HTMLFooterComponentElement;
         "header-component": HTMLHeaderComponentElement;
         "link-component": HTMLLinkComponentElement;
         "links-head-component": HTMLLinksHeadComponentElement;
         "logo-component": HTMLLogoComponentElement;
         "main-content-component": HTMLMainContentComponentElement;
         "my-component": HTMLMyComponentElement;
         "slideshow-component": HTMLSlideshowComponentElement;
         "socials-component": HTMLSocialsComponentElement;
         "website-component": HTMLWebsiteComponentElement;
     }
 }
 declare namespace LocalJSX {
     interface ContentAreaComponent {
     }
     interface ExampleComponent {
         "exampleProp"?: string;
         "onExampleEvent"?: (event: CustomEvent<string>) => void;
     }
     interface FooterComponent {
     }
     interface HeaderComponent {
     }
     interface LinkComponent {
         "link"?: string;
         "text"?: string;
     }
     interface LinksHeadComponent {
     }
     interface LogoComponent {
     }
     interface MainContentComponent {
     }
     interface MyComponent {
         /**
           * The first name
          */
         "first"?: string;
         /**
           * The last name
          */
         "last"?: string;
         /**
           * The middle name
          */
         "middle"?: string;
     }
     interface SlideshowComponent {
     }
     interface SocialsComponent {
     }
     interface WebsiteComponent {
     }
     interface IntrinsicElements {
         "content-area-component": ContentAreaComponent;
         "example-component": ExampleComponent;
         "footer-component": FooterComponent;
         "header-component": HeaderComponent;
         "link-component": LinkComponent;
         "links-head-component": LinksHeadComponent;
         "logo-component": LogoComponent;
         "main-content-component": MainContentComponent;
         "my-component": MyComponent;
         "slideshow-component": SlideshowComponent;
         "socials-component": SocialsComponent;
         "website-component": WebsiteComponent;
     }
 }
 export { LocalJSX as JSX };
 declare module "@stencil/core" {
     export namespace JSX {
         interface IntrinsicElements {
             "content-area-component": LocalJSX.ContentAreaComponent & JSXBase.HTMLAttributes<HTMLContentAreaComponentElement>;
             "example-component": LocalJSX.ExampleComponent & JSXBase.HTMLAttributes<HTMLExampleComponentElement>;
             "footer-component": LocalJSX.FooterComponent & JSXBase.HTMLAttributes<HTMLFooterComponentElement>;
             "header-component": LocalJSX.HeaderComponent & JSXBase.HTMLAttributes<HTMLHeaderComponentElement>;
             "link-component": LocalJSX.LinkComponent & JSXBase.HTMLAttributes<HTMLLinkComponentElement>;
             "links-head-component": LocalJSX.LinksHeadComponent & JSXBase.HTMLAttributes<HTMLLinksHeadComponentElement>;
             "logo-component": LocalJSX.LogoComponent & JSXBase.HTMLAttributes<HTMLLogoComponentElement>;
             "main-content-component": LocalJSX.MainContentComponent & JSXBase.HTMLAttributes<HTMLMainContentComponentElement>;
             "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
             "slideshow-component": LocalJSX.SlideshowComponent & JSXBase.HTMLAttributes<HTMLSlideshowComponentElement>;
             "socials-component": LocalJSX.SocialsComponent & JSXBase.HTMLAttributes<HTMLSocialsComponentElement>;
             "website-component": LocalJSX.WebsiteComponent & JSXBase.HTMLAttributes<HTMLWebsiteComponentElement>;
         }
     }
 }
 