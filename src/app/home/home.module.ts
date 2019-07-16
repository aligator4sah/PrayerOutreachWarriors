import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { PrayListModule } from '../work-content/pray-list/pray-list.module';
import { HomeComponent } from './home.component';
import { LeftSideBarComponent } from '../left-side-bar/left-side-bar.component'
import { SharedModule } from '../shared/shared.module'
import { CreatePrayRequestComponent } from '../work-content/create-pray-request/create-pray-request.component';
import { OutScheduleComponent } from '../work-content/out-schedule/out-schedule.component';

const routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: '', redirectTo: '/list', pathMatch: 'full'},
      {path: 'list', loadChildren: '../work-content/pray-list/pray-list.module#PrayListModule'},
      {path: 'create-pray', component: CreatePrayRequestComponent},
      {path: 'out-schedule', component: OutScheduleComponent}
    ]
  }
];

@NgModule({
    imports: [
      CommonModule,
      SharedModule,
      RouterModule.forChild(routes),
    ],
    declarations: [
      HomeComponent, 
      LeftSideBarComponent,
      CreatePrayRequestComponent,
      OutScheduleComponent
    ],
    exports: [
        CommonModule,
        SharedModule,
        HomeComponent,
        LeftSideBarComponent,
        CreatePrayRequestComponent,
        OutScheduleComponent
    ]
})

export class HomeModule { }
