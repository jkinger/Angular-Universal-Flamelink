import { Injectable, Inject } from '@angular/core';
import * as flamelink from 'flamelink';
import { FirebaseApp } from '@angular/fire';

// MUST include this next line for Flamelink SDK to work with SSR Universal
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FlamelinkService {
  // GET|SET flApp
  private _flApp: flamelink.App;
  get flApp(): flamelink.App {
    return this._flApp;
  }
  set flApp(value: flamelink.App) {
    this._flApp = value;
  }

  constructor(
    @Inject(FirebaseApp) private _fb: firebase.app.App,
    // MUST include it as a depedency (even if you don't plan on using it)
    private db: AngularFireDatabase
  ) {
    const config: flamelink.FlamelinkConfig = {
      firebaseApp: this._fb,
      env: 'production',
      locale: 'en-US'
    };
    this.flApp = flamelink(config);
  }

  getApp() {
    return this.flApp;
  }
}
