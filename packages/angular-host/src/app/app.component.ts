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
    name: "NAME (passed as prop)"
  };

  public config: any;

  public mountRootParcel = mountRootParcel;

  public testCondition = false;

  ngOnInit() {
    // @ts-ignore
    this.config = () => System.import('http://localhost:8080/test-react-microfrontend.js');

    window.setTimeout(() => {
      this.testCondition = true;
    }, 100);
  }
}
