import { Component, Input ,Output,EventEmitter,OnInit } from '@angular/core';

import { DataServiceService } from "../services/data-service.service";

@Component({
  selector: 'app-child',
  template: `
  <div>
  Message_child:<h3>{{childMsg}}</h3>
  </div><div>
  <button (click)="sendMessage()">Send Message</button>
  </div><div>
  <button (click)="newMessage()">New Message</button>
  </div><div>
  Message3:{{message3}}
  </div>
    
  `
})
export class ChildComponent implements OnInit {

  private _name='';
  message = 'Hola Gaurang this message from View child methord!';

  message2:string ="Hola this message from Output Emmitter methord";
  message3:string;
  @Output() messageEvent=new EventEmitter<string>();

  //Input Methord
  @Input('parentMessage') childMsg:string;
  
  // @Input()
  // set name(name: string) {
  //   this._name = (name && name.trim()) || '<no name set>';
  // }

  // get name(): string { return this._name; }

  constructor( private data:DataServiceService) { }
  
  sendMessage(){
    this.messageEvent.emit(this.message2)
  }

  ngOnInit(){
    this.data.currentMessage.subscribe(message3=>this.message3=message3);
    
  }

  newMessage()
{
  this.data.changeMessage("hello from data service Methord")
}
}