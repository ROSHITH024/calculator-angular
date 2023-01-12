import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { AdditionComponentComponent } from './addition-component/addition-component.component';
import { PrimeComponent } from './prime/prime.component';
import { NavComponent } from './nav/nav.component';
import { SubstactionComponent } from './substaction/substaction.component';

@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent,
    AdditionComponentComponent,
    PrimeComponent,
    NavComponent,
    SubstactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
