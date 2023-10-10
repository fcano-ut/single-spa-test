import { Component } from '@angular/core';
import { mountRootParcel } from 'single-spa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-host';

  public customProps: any = {
    name: "NAME (passed as prop)"
  };

  public config: any;

  public mountRootParcel = mountRootParcel;

  ngOnInit() {
    // @ts-ignore
    this.config = () => import('reactMicrofrontend/Component');
  }
}
