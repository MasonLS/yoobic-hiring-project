import { Component, Input } from '@angular/core';

import { Person } from '../../person';

@Component({
    selector: 'person-card',
    templateUrl: 'person-card.component.html'
})
export class PersonCardComponent {
    @Input()
    person: Person;
    title: string;

    getTitle(){
        const birthYear = +this.person.birth_year.slice(0, this.person.birth_year.length - 3);
        const age = birthYear + 4;
        if (isNaN(age)) {
            return this.person.name;
        }
        return `${this.person.name}, ${age}`;
    }
}