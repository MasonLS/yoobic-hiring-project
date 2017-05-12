import { Injectable }    from '@angular/core';

@Injectable()
export class SignInService {
    private signedIn = false;

    isSignedIn(): boolean {
        return this.signedIn;
    }

    signIn(): void {
        this.signedIn = true;
    }

    signOut(): void {
        this.signedIn = false;
    }
}