import { Component,ViewChild,AfterViewInit,ChangeDetectorRef,OnInit } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { DataServiceService } from "../services/data-service.service";


@Component({
  selector: 'app-parent',
  template: `
  //Normal
  <div>
  <h2>Master controls {{parentMessage}} names</h2>
  </div><div>
  //Input Methord
  <app-child [parentMessage]="parentMessage" ></app-child>
  </div><div>
  //ViewChild Methord 
  Message: {{message}}
  </div><div>
  //output and EventEmitter
  Message2: {{message2}}
  <app-child (messageEvent)="reciveMessage($event)" ></app-child>
  </div>
  //dataservice
  <div>
  Message3: {{message3}}
  </div>
  `
})
export class ParentComponent implements AfterViewInit,OnInit{
  parentMessage = "this message from Input methord Gaurang";
  

  @ViewChild(ChildComponent) child;

  constructor(private cdref: ChangeDetectorRef,
    private data:DataServiceService) { }

  //Input Methord  
  message:string;

  message2:string;
  message3:string;

  ngAfterViewInit(){
    this.message=this.child.message;
    //remove error to show this data is your
    this.cdref.detectChanges();
  }

  reciveMessage($event){
    this.message2=$event;
  }

  ngOnInit(){
    this.data.currentMessage.subscribe(message2 => this.message2=message2)
  }
}