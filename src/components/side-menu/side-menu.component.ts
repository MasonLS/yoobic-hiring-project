import { Component, ViewChild } from '@angular/core';

import { MenuController, Nav } from 'ionic-angular';

import { SignInPage } from '../../pages/sign-in/sign-in';
import { ListPage } from '../../pages/list/list';

@Component({
    selector: 'side-menu',
    templateUrl: 'side-menu.component.html'
})
export class SideMenuComponent {
    @ViewChild(Nav) nav: Nav;

    pages: Array<{title: string, component: any}>;

    constructor(public menu: MenuController) {
        this.pages = [
            { title: 'Sign In', component: SignInPage },
            { title: 'My First List', component: ListPage }
        ];
    }

    openPage(page) {
        this.menu.close();
        this.nav.setRoot(page.component);
  }
}