import { Injectable,EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private subject = new Subject<any>();

  sendMessage(message:string){
    this.subject.next({text: message });
  }

  clearMessage() {
    this.subject.next({text: '' });
  }

  getMessage():Observable<any>{
    return this.subject.asObservable();
  }

  statusUpdatedEvent = new EventEmitter<string>();

  constructor() { }
}
