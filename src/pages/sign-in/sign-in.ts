import { Component } from '@angular/core';

import { NavController, MenuController } from 'ionic-angular';

import { ListPage } from '../list/list';

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html'
})
export class SignInPage {
  constructor(public navCtrl: NavController, public menu: MenuController) {
    
  }

  ionViewWillEnter(): void {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave(): void {
    this.menu.swipeEnable(true);
  }

  buttonPressed(): void {
    this.navCtrl.push(ListPage);
  }
}
