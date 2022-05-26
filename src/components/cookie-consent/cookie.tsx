import { Component, h, Host, State } from '@stencil/core';

@Component({
  tag: 'cookie-consent',
  styleUrl: 'cookie.css',
  shadow: false,
})
export class Cookie {
  @State() hidden : boolean = false;

  componentWillLoad(){
    let status = localStorage.getItem("cookie");
    this.hidden = !!status;
  }

  accept(){
    localStorage.setItem("cookie", "1");
    this.hidden = true;
  }

  decline(){
    localStorage.removeItem("cookie");
    this.hidden = true;
  }

  render() {
    return (
      <Host style={{display: this.hidden ? "none": "block"}}>
        <div id='cookie'>
          Diese Website benutzt Cookies um die Nutzererfahrung zu verbessern.
          <div id="cookie-buttons">
            <div onClick={() => this.accept()}>Accept All</div>
            <div onClick={() => this.decline()}>Decline</div>
          </div>
        </div>
      </Host>)
  }
}
