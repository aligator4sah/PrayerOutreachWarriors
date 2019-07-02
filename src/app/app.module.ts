import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { SharedModule } from './shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { PrayListComponent } from './work-content/pray-list/pray-list.component';
import { CreatePrayRequestComponent } from './work-content/create-pray-request/create-pray-request.component';
import { OutScheduleComponent } from './work-content/out-schedule/out-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftSideBarComponent,
    PrayListComponent,
    CreatePrayRequestComponent,
    OutScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
