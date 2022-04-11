
import {Injectable} from '@angular/core';
import { delay, interval, Observable, of } from 'rxjs';
import { ChatMessage } from '../model/message';

@Injectable({providedIn: 'root'})
export class MessageService {

    public getNewMessages(): Observable<ChatMessage[]> {
        const data = this.createRandomMessages(3)
        return of(data).pipe(delay(3000))
      
    }

    // generate random messages array 
    private createRandomMessages(num: number) {
        let result:  ChatMessage[] = []
        const date = new Date()

        for(var i = 0; i < num; i++) {
            const userId = Math.floor(Math.random() * 4) // 1-4 user
            let msgDate = new Date(date)
            msgDate.setMilliseconds(msgDate.getMilliseconds() + i)
            result[i] = {
                userId: userId,
                userName: `user ${userId}`,
                text: `a message from  user ${userId}`,
                date:msgDate
            } as ChatMessage
        }

        return result;
    }
}