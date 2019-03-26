import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent implements OnInit {

  constructor(private msgService : MessageService, private shared : SharedService) { }
  msg: string;
  abc:string;

  sendMessageToA = () => {
    this.msgService.sendMessage(this.msg);
    //this.statusUpdate();
  }

  clearMessage = () => {
    this.msgService.clearMessage();
  }

  ngOnInit() {
    this.sendMessageToA();

    this.shared.globalVarUpdate.subscribe((data) => {
      this.abc = data;
    })
  }

  statusUpdate(){
    this.msgService.statusUpdatedEvent.emit(this.msg);
  }

}
