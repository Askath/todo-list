import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import firebase from 'firebase/compat';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './home/firebase-config';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    console.log('it works');
  }
}
