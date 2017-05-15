import { Component, Input, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { PersonDetailsPage } from '../../pages/person-details/person-details';
import { PeopleService } from '../../services/people.service';
import { Person } from '../../person';

@Component({
    selector: 'person-card',
    templateUrl: 'person-card.component.html'
})
export class PersonCardComponent implements OnInit {
    @Input()
    person: Person;
    title: string;
    homeworld: object = {name: ''};

    constructor(public navCtrl: NavController, private peopleService: PeopleService) {}

    ngOnInit(): void {
        const age = this.peopleService.getAge(this.person);
        
        if (isNaN(age)) {
            this.title = this.person.name;
        } else {
            this.title = `${this.person.name}, ${age}`;
        }

        this.peopleService.getHomeworld(this.person)
            .then(homeworld => this.homeworld = homeworld);
    }

    personTapped(event): void {
        this.navCtrl.push(PersonDetailsPage, {
            person: this.person,
            homeworld: this.homeworld
        });
    }

}