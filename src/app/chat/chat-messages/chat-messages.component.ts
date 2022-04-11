import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { ChatMessage, initData } from 'src/app/model/message';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss']
})
export class ChatMessagesComponent implements OnInit, AfterViewInit {
  @ViewChild('chatMessages') private chatMessagesEl!: ElementRef;
  @ViewChildren('message') private messageContainers!: QueryList<ElementRef>;

  messages: ChatMessage[] = []
  isLoading: boolean = false;
  currentUserId: number = 3;

  constructor(
    private dbService: NgxIndexedDBService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
     this.getDBMessages();
     this.getNewMessages();
  }

  private getDBMessages() {
    this.dbService.getAll('message').subscribe(data => {
      this.messages = data as ChatMessage[]
    })

  }

  private getNewMessages() {
    this.isLoading = true
    this.messageService.getNewMessages().subscribe(data => {
      this.dbService.bulkAdd('message', data).subscribe(data => {
        this.getDBMessages()
        this.isLoading = false
      })
    })
  }


ngAfterViewInit() {
  this.scrollToElement();
  this.messageContainers.changes.subscribe((list: QueryList<ElementRef>) => {
    this.scrollToElement();
  });
}


scrollToElement(): void {
  this.chatMessagesEl.nativeElement.scroll({
    top: this.chatMessagesEl.nativeElement.scrollHeight,
    left: 0,
    behavior: 'smooth'
  });
}

}
