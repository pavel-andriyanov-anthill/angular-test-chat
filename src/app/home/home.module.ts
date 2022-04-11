import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { ViewContactDialogComponent } from './dialog/contact/view-contact-dialog/view-contact-dialog.component';
import { CreateContactDialogComponent } from './dialog/contact/create-contact-dialog/create-contact-dialog.component';
import { DeleteContactDialogComponent } from './dialog/contact/delete-contact-dialog/delete-contact-dialog.component';


@NgModule({
  declarations: [
    HomePageComponent,
    ViewContactDialogComponent,
    CreateContactDialogComponent,
    DeleteContactDialogComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
