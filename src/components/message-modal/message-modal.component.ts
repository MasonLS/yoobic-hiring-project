import { Component, Input } from '@angular/core';

import { ViewController, NavParams } from 'ionic-angular';

import { Person } from '../../person';

@Component({
    selector: 'message-modal',
    templateUrl: 'message-modal.component.html'
})
export class MessageModal {
    @Input()
    person: Person;

    constructor(public viewCtrl: ViewController, public navParams: NavParams) {
        this.person = this.navParams.get('person');
    }

    dismiss(): void {
        this.viewCtrl.dismiss();
    }
}