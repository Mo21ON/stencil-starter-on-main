import { Component, h, getAssetPath, Listen, Prop, State} from '@stencil/core';

@Component({
  tag: 'content-area-component',
  styleUrl: 'content-area.css',
  shadow: false,
  assetsDirs: ['assets'],
})

export class ContentArea {

  elem: HTMLDivElement;
  @State() textActive: boolean = false;

  @Prop() headline: string;
  @Prop() text: string;
  @Prop() bgimg: string;
  @Prop() bgcolor: string;
  @Prop() fontcolor: string;
  @Prop() type: 'imageonly' | 'slideshow' | 'textheadlinebg' | 'textheadlinecolorbg';

  @Listen('scroll', {target: 'window'})
  onScroll() {
    if(!this.elem){
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

  componentWillLoad(){
    this.onScroll();
  }

  render() {
    let textClasses = ["text-container"];
    if(this.textActive){
      textClasses.push("active");
    }
    return <div class='content-area' ref={(el) => this.elem = el as HTMLDivElement}>
      {this.type === 'imageonly' &&
        <div class='content-container'><img class='content-img' src={getAssetPath('./assets/' + this.bgimg)} /></div>}
      {this.type === 'slideshow' && <div class='content-container'></div>}
      {this.type === 'textheadlinebg' && <div class='content-container' style={{
        backgroundImage: 'url(' + getAssetPath('./assets/' + this.bgimg) + ')',
        color: this.fontcolor ?? 'black',
      }}><div class={textClasses.join(" ")}><h2>{this.headline}</h2><p>{this.text}</p></div></div>}
      {this.type === 'textheadlinecolorbg' && <div class='content-container' style={{
        backgroundColor: this.bgcolor,
        color: this.fontcolor ?? 'black',
      }}>
        <div class={textClasses.join(" ")}><h2>{this.headline}</h2><p>{this.text}</p></div></div>}
    </div>;
  }
  
}

