import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Contact, contactData } from 'src/app/model/contact';
import { CreateContactDialogComponent } from '../dialog/contact/create-contact-dialog/create-contact-dialog.component';
import { DeleteContactDialogComponent } from '../dialog/contact/delete-contact-dialog/delete-contact-dialog.component';
import { ViewContactDialogComponent } from '../dialog/contact/view-contact-dialog/view-contact-dialog.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  contactsDataSource =  new MatTableDataSource(contactData)
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email',  'ipAddress', 'actions'];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openContactCreateDialog() {
    const contactCreateDialoggRef = this.dialog.open(
      CreateContactDialogComponent, 
      { 
        panelClass: 'dialog-layout',
      });

    contactCreateDialoggRef.afterClosed().subscribe(result => {
      if (result) {
        // TODO: create contact via service
        console.log('TODO: creat Contact', result)
      }
    });
  }

  openContactViewDialog(contact: Contact) {
    const contactViewDialoggRef = this.dialog.open(
      ViewContactDialogComponent, 
      { 
        panelClass: 'dialog-layout',
        data: contact
      });
  }

  openContactDeleteDialog(contact: Contact) {
    const contactDeleteDialoggRef = this.dialog.open(
      DeleteContactDialogComponent, 
      { 
        panelClass: 'dialog-layout',
        data: contact
      });

      contactDeleteDialoggRef.afterClosed().subscribe(result => {
      if (result) {
        // TODO: remove contact via service
        console.log('TODO: remove Contact', result)
      }
    });
  }

}
