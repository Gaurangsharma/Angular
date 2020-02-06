import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { baseURL } from "../shared/baseurl";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  basePath:string;

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
    this.basePath=baseURL;
  }

  openLoginForm(){
    this.dialog.open(LoginComponent,{width:'500px',height:'450px'});
  }
}
