import { Component, Input } from '@angular/core';

import { Person } from '../../person';

@Component({
    selector: 'person-card',
    templateUrl: 'person-card.html'
})
export class PersonCardComponent {
    @Input()
    person: Person;
}