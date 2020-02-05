import { Component, OnInit } from '@angular/core';
import { LeadersService } from "../services/leaders.service";
import { Leader } from "../shared/leader";
import { baseURL } from "../shared/baseurl";
import { visibility,flyInOut } from "../animation/app.animation";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host:{
    '[@flyInOut]':'true',
    'style':'display:block;'
  },
  animations:[
    flyInOut()
  ]
})
export class AboutComponent implements OnInit {

  leaders:Leader[];
  basePath:string;
  abterrMsg:string;

  constructor( private leaderservice:LeadersService) { }

  ngOnInit() {
    this.basePath=baseURL;
    console.log("About us");
    this.leaderservice.getLeaders()
    .subscribe((leaders)=>this.leaders=leaders,abterrMsg=>this.abterrMsg=<any>abterrMsg);
  }

}
