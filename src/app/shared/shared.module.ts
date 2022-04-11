import {NgModule}           				from '@angular/core';
import {CommonModule}       				from '@angular/common';
import {MatTabsModule} 	    				from '@angular/material/tabs'
import {MatButtonModule}    				from '@angular/material/button';
import {MatTableModule}     				from '@angular/material/table';
import {MatIconModule}      				from '@angular/material/icon';
import {MatDialogModule}    				from '@angular/material/dialog'
import {MatFormFieldModule} 				from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} 	from '@angular/forms';
import {MatInputModule} 					from '@angular/material/input';
import {MatSidenavModule} 					from '@angular/material/sidenav';


@NgModule({
	imports: [
		CommonModule,
		MatTabsModule,
		MatButtonModule,
		MatTableModule,
		MatIconModule,
		MatDialogModule,
		MatFormFieldModule,
		FormsModule,
		ReactiveFormsModule,
		MatInputModule,
		MatSidenavModule
	],
	exports: [
		MatTabsModule,
		MatButtonModule,
		MatTableModule,
		MatIconModule,
		MatDialogModule,
		MatFormFieldModule,
		FormsModule,
		ReactiveFormsModule,
		MatInputModule,
		MatSidenavModule
	],
	declarations: [
	]
})
export class SharedModule {
}
