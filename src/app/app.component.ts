import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { SignInPage } from '../pages/sign-in/sign-in';
import { MasterListPage } from '../pages/master-list/master-list';
import { SignInService } from '../services/sign-in.service';
import { User } from '../user';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = SignInPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private signInService: SignInService
  ) {
    this.initializeApp();
    this.pages = [
      { title: 'Characters', component: MasterListPage }
    ];
  }

  initializeApp(): void {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page): void {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  signOut(): void {
    this.menu.close();
    this.signInService.signOut();
    this.nav.setRoot(SignInPage);
  }
}
