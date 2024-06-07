import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {RegisterComponent } from './register/register.component';
import {MatSliderModule} from '@angular/material/slider';
import { HomePageComponent } from './home-page/home-page.component';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatFormFieldModule,MatInputModule,MatCheckboxModule,MatButtonModule,MatSliderModule,
    ReactiveFormsModule,
    LeafletModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
