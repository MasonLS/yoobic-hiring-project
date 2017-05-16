import { Component } from '@angular/core';

import { NavController, MenuController } from 'ionic-angular';

import { MasterListPage } from '../master-list/master-list';
import { SignInService } from '../../services/sign-in.service';

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html'
})
export class SignInPage {
  email: string;
  password: string;

  constructor(
    public navCtrl: NavController, 
    public menu: MenuController,
    private signInService: SignInService
  ) {
    
  }

  ionViewWillEnter(): void {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave(): void {
    this.menu.swipeEnable(true);
  }

  buttonPressed(): void {
    this.signInService.signIn({
      email: this.email,
      password: this.password
    });
    this.navCtrl.push(MasterListPage);
  }
}
