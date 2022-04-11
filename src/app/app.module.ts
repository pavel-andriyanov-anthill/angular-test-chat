import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const dbConfig: DBConfig  = {
  name: 'DB',
  version: 1,
  objectStoresMeta: [{
    store: 'message',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'id', keypath: 'id', options: { unique: true } },
      { name: 'userId', keypath: 'userId', options: { unique: false } },
      { name: 'userName', keypath: 'userName', options: { unique: false } },
      { name: 'text', keypath: 'text', options: { unique: false } },
      { name: 'date', keypath: 'date', options: { unique: false } },
    ]
  }]
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ChatModule,
    SharedModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
