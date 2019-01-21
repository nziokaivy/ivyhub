import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ProfileComponent} from './profile/profile.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileService } from './profile.service';
import { LandingpageComponent } from './landingpage/landingpage.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ProfileComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
