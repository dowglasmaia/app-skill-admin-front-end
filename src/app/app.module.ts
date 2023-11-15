import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataBase } from './in-memory-database'
import { HomeComponent } from './components/home/home.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthGuardService } from './guard/auth-guard.service';
import { LoginGuard } from './guard/login-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //HttpClientInMemoryWebApiModule.forRoot(InMemoryDataBase)
  ],
  providers: [
    AuthGuardService,
    LoginGuard
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

})
export class AppModule { }
