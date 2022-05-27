//Sebastian
import { Component, h, getAssetPath, Listen, Prop, State, Host } from '@stencil/core';

@Component({
  tag: 'content-area-component',
  styleUrl: 'content-area.css',
  shadow: false,
  assetsDirs: ['assets'],
})

export class ContentArea {

  elem: HTMLDivElement;
  @State() textActive: boolean = false;
  @State() offset: number = 0;
  @State() idxActive: number = 0;

  @Prop() headline: string;
  @Prop() text: string;
  @Prop() bgimg: string;
  @Prop() bgcolor: string;
  @Prop() fontcolor: string;
  @Prop() type: 'imageonly' | 'slideshow' | 'textheadlinebg' | 'textheadlinecolorbg' | 'slideshow2';

  private images: string[] = ['./assets/pumping3.jpg', './assets/pumping2.jpg', './assets/pumping1.jpg'];
  private imagesref: string[] = ['./assets/bewertungen1.jpg','./assets/bewertungen2.jpg','./assets/bewertungen3.jpg','./assets/bewertungen4.jpg'];

  @Listen('scroll', { target: 'window' })
  onScroll() {
    if (!this.elem) {
      return;
    }
    let windowHeight = window.innerHeight;
    let elementTop = this.elem.getBoundingClientRect().top;
    let elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      this.textActive = true;
    } else {
      this.textActive = false;
    }
  }

  componentWillLoad() {
    this.onScroll();
  }

  changePic(idx: number) {
    let newOffset = -(idx * 100);
    this.offset = newOffset;
    this.idxActive = idx;
  }

  render() {
    let textClasses = ["text-container"];
    if (this.textActive) {
      textClasses.push("active");
    }
    return <Host class='content-area' ref={(el) => this.elem = el as HTMLDivElement}>
      {this.type === 'imageonly' &&
        <div class='content-container'><img class='content-img' src={getAssetPath('./assets/' + this.bgimg)} />
          <div><slot /></div></div>}
      {this.type === 'slideshow' && <div class='content-container'>
        <div id='controls'>{this.images.map((_src, index) => <span
          style={{ opacity: index === this.idxActive ? '1' : '0.6' }} onClick={() => this.changePic(index)}>⚫</span>)}</div>
        <div id='slideshow' style={{ left: this.offset + 'vw' }}>
          {this.images.map((src, index) => <img class='slideshow-img' src={getAssetPath(src)} alt={'image' + index} />)}
        </div></div>}
        {this.type === 'slideshow2' && <div class='content-container'>
        <div id='controls'>{this.imagesref.map((_src, index) => <span
          style={{ opacity: index === this.idxActive ? '1' : '0.6' }} onClick={() => this.changePic(index)}>⚫</span>)}</div>
        <div id='slideshow2' style={{ left: this.offset + 'vw' }}>
          {this.imagesref.map((src, index) => <img class='slideshow-img' src={getAssetPath(src)} alt={'image' + index} />)}
        </div></div>}
      {this.type === 'textheadlinebg' && <div class='content-container' style={{
        backgroundImage: 'url(' + getAssetPath('./assets/' + this.bgimg) + ')',
        color: this.fontcolor ?? 'black',
      }}><div class={textClasses.join(" ")}><h2>{this.headline}</h2><p>{this.text}</p></div></div>}
      {this.type === 'textheadlinecolorbg' && <div class='content-container' style={{
        backgroundColor: this.bgcolor,
        color: this.fontcolor ?? 'black',
      }}>
        <div class={textClasses.join(" ")}><h2>{this.headline}</h2><p>{this.text}</p></div><div><slot /></div></div>}
    </Host>;
  }

}

