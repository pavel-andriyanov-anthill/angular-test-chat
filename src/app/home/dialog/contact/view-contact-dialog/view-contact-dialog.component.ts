import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from 'src/app/model/contact';

@Component({
  selector: 'app-view-contact-dialog',
  templateUrl: './view-contact-dialog.component.html',
  styleUrls: ['./view-contact-dialog.component.scss']
})
export class ViewContactDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Contact
  ) { }

  ngOnInit(): void {
  }

}
