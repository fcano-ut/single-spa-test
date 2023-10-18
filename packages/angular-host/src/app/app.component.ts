import { Component } from '@angular/core';
import { mountRootParcel } from 'single-spa';
import 'systemjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-host';

  public customProps: any = {
    message: "I'm passing a prop on mount!"
  };

  public config: any;

  public mountRootParcel = mountRootParcel;

  ngOnInit() {
    // @ts-ignore
    this.config = () => System.import('http://localhost:8080/test-react-microfrontend.js');

    window.setTimeout(() => {
      this.customProps = {
        name: "I'm updating props!",
      };
    }, 100);
  }
}
