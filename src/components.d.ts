/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ContactComponent {
        "mail": string;
    }
    interface ContentAreaComponent {
        "bgcolor": string;
        "bgimg": string;
        "fontcolor": string;
        "headline": string;
        "text": string;
        "type": 'imageonly' | 'slideshow' | 'textheadlinebg' | 'textheadlinecolorbg' | 'slideshow2';
    }
    interface CookieConsent {
    }
    interface DisclaimerComponent {
        "text": string;
    }
    interface FooterComponent {
    }
    interface HeaderComponent {
    }
    interface HeadlineContainer {
        "headline": string;
        "type": string;
    }
    interface LinkBlock {
        "links": string;
    }
    interface LinkComponent {
        "link": string;
        "text": string;
    }
    interface LinksHeadComponent {
    }
    interface LogoComponent {
        "imagename": string;
    }
    interface MainContentComponent {
    }
    interface SocialsComponent {
    }
    interface TimerComponent {
        "hours": string;
    }
    interface WebsiteComponent {
    }
}
declare global {
    interface HTMLContactComponentElement extends Components.ContactComponent, HTMLStencilElement {
    }
    var HTMLContactComponentElement: {
        prototype: HTMLContactComponentElement;
        new (): HTMLContactComponentElement;
    };
    interface HTMLContentAreaComponentElement extends Components.ContentAreaComponent, HTMLStencilElement {
    }
    var HTMLContentAreaComponentElement: {
        prototype: HTMLContentAreaComponentElement;
        new (): HTMLContentAreaComponentElement;
    };
    interface HTMLCookieConsentElement extends Components.CookieConsent, HTMLStencilElement {
    }
    var HTMLCookieConsentElement: {
        prototype: HTMLCookieConsentElement;
        new (): HTMLCookieConsentElement;
    };
    interface HTMLDisclaimerComponentElement extends Components.DisclaimerComponent, HTMLStencilElement {
    }
    var HTMLDisclaimerComponentElement: {
        prototype: HTMLDisclaimerComponentElement;
        new (): HTMLDisclaimerComponentElement;
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
    interface HTMLHeadlineContainerElement extends Components.HeadlineContainer, HTMLStencilElement {
    }
    var HTMLHeadlineContainerElement: {
        prototype: HTMLHeadlineContainerElement;
        new (): HTMLHeadlineContainerElement;
    };
    interface HTMLLinkBlockElement extends Components.LinkBlock, HTMLStencilElement {
    }
    var HTMLLinkBlockElement: {
        prototype: HTMLLinkBlockElement;
        new (): HTMLLinkBlockElement;
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
    interface HTMLSocialsComponentElement extends Components.SocialsComponent, HTMLStencilElement {
    }
    var HTMLSocialsComponentElement: {
        prototype: HTMLSocialsComponentElement;
        new (): HTMLSocialsComponentElement;
    };
    interface HTMLTimerComponentElement extends Components.TimerComponent, HTMLStencilElement {
    }
    var HTMLTimerComponentElement: {
        prototype: HTMLTimerComponentElement;
        new (): HTMLTimerComponentElement;
    };
    interface HTMLWebsiteComponentElement extends Components.WebsiteComponent, HTMLStencilElement {
    }
    var HTMLWebsiteComponentElement: {
        prototype: HTMLWebsiteComponentElement;
        new (): HTMLWebsiteComponentElement;
    };
    interface HTMLElementTagNameMap {
        "contact-component": HTMLContactComponentElement;
        "content-area-component": HTMLContentAreaComponentElement;
        "cookie-consent": HTMLCookieConsentElement;
        "disclaimer-component": HTMLDisclaimerComponentElement;
        "footer-component": HTMLFooterComponentElement;
        "header-component": HTMLHeaderComponentElement;
        "headline-container": HTMLHeadlineContainerElement;
        "link-block": HTMLLinkBlockElement;
        "link-component": HTMLLinkComponentElement;
        "links-head-component": HTMLLinksHeadComponentElement;
        "logo-component": HTMLLogoComponentElement;
        "main-content-component": HTMLMainContentComponentElement;
        "socials-component": HTMLSocialsComponentElement;
        "timer-component": HTMLTimerComponentElement;
        "website-component": HTMLWebsiteComponentElement;
    }
}
declare namespace LocalJSX {
    interface ContactComponent {
        "mail"?: string;
    }
    interface ContentAreaComponent {
        "bgcolor"?: string;
        "bgimg"?: string;
        "fontcolor"?: string;
        "headline"?: string;
        "text"?: string;
        "type"?: 'imageonly' | 'slideshow' | 'textheadlinebg' | 'textheadlinecolorbg' | 'slideshow2';
    }
    interface CookieConsent {
    }
    interface DisclaimerComponent {
        "text"?: string;
    }
    interface FooterComponent {
    }
    interface HeaderComponent {
    }
    interface HeadlineContainer {
        "headline"?: string;
        "type"?: string;
    }
    interface LinkBlock {
        "links"?: string;
    }
    interface LinkComponent {
        "link"?: string;
        "text"?: string;
    }
    interface LinksHeadComponent {
    }
    interface LogoComponent {
        "imagename"?: string;
    }
    interface MainContentComponent {
    }
    interface SocialsComponent {
    }
    interface TimerComponent {
        "hours"?: string;
    }
    interface WebsiteComponent {
    }
    interface IntrinsicElements {
        "contact-component": ContactComponent;
        "content-area-component": ContentAreaComponent;
        "cookie-consent": CookieConsent;
        "disclaimer-component": DisclaimerComponent;
        "footer-component": FooterComponent;
        "header-component": HeaderComponent;
        "headline-container": HeadlineContainer;
        "link-block": LinkBlock;
        "link-component": LinkComponent;
        "links-head-component": LinksHeadComponent;
        "logo-component": LogoComponent;
        "main-content-component": MainContentComponent;
        "socials-component": SocialsComponent;
        "timer-component": TimerComponent;
        "website-component": WebsiteComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "contact-component": LocalJSX.ContactComponent & JSXBase.HTMLAttributes<HTMLContactComponentElement>;
            "content-area-component": LocalJSX.ContentAreaComponent & JSXBase.HTMLAttributes<HTMLContentAreaComponentElement>;
            "cookie-consent": LocalJSX.CookieConsent & JSXBase.HTMLAttributes<HTMLCookieConsentElement>;
            "disclaimer-component": LocalJSX.DisclaimerComponent & JSXBase.HTMLAttributes<HTMLDisclaimerComponentElement>;
            "footer-component": LocalJSX.FooterComponent & JSXBase.HTMLAttributes<HTMLFooterComponentElement>;
            "header-component": LocalJSX.HeaderComponent & JSXBase.HTMLAttributes<HTMLHeaderComponentElement>;
            "headline-container": LocalJSX.HeadlineContainer & JSXBase.HTMLAttributes<HTMLHeadlineContainerElement>;
            "link-block": LocalJSX.LinkBlock & JSXBase.HTMLAttributes<HTMLLinkBlockElement>;
            "link-component": LocalJSX.LinkComponent & JSXBase.HTMLAttributes<HTMLLinkComponentElement>;
            "links-head-component": LocalJSX.LinksHeadComponent & JSXBase.HTMLAttributes<HTMLLinksHeadComponentElement>;
            "logo-component": LocalJSX.LogoComponent & JSXBase.HTMLAttributes<HTMLLogoComponentElement>;
            "main-content-component": LocalJSX.MainContentComponent & JSXBase.HTMLAttributes<HTMLMainContentComponentElement>;
            "socials-component": LocalJSX.SocialsComponent & JSXBase.HTMLAttributes<HTMLSocialsComponentElement>;
            "timer-component": LocalJSX.TimerComponent & JSXBase.HTMLAttributes<HTMLTimerComponentElement>;
            "website-component": LocalJSX.WebsiteComponent & JSXBase.HTMLAttributes<HTMLWebsiteComponentElement>;
        }
    }
}
