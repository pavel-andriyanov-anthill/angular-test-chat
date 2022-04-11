import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';

const routes: Routes = [
  {
    path: '',
    component: ChatMessagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
