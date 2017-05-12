import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ListPage } from '../list/list';

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html'
})
export class SignInPage {
  constructor(public navCtrl: NavController) {

  }

  buttonPressed(): void {
      this.navCtrl.push(ListPage);
  }
}
