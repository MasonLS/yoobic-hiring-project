import { Injectable } from '@angular/core';

import { User } from '../user';

@Injectable()
export class SignInService {
    private user: User = null;

    isSignedIn(): boolean {
        return this.user !== null;
    }

    signIn(user): void {
        this.user = user;
    }

    signOut(): void {
        this.user = null;
    }

    getSignedInUser(): User {
        return this.user;
    }
}