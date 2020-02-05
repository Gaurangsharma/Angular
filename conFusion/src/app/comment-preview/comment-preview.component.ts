import { Component, OnInit ,ViewChild,AfterViewInit } from '@angular/core';
import { MatDialogModule,MatDialogRef } from "@angular/material/dialog";
import { DishDetailsComponent } from "../dish-details/dish-details.component";
import { Comment } from "../shared/comment";
import { detachProjectedView } from '@angular/core/src/view/view_attach';

@Component({
  selector: 'app-comment-preview',
  templateUrl: './comment-preview.component.html',
  styleUrls: ['./comment-preview.component.scss']
})
export class CommentPreviewComponent implements OnInit {
  
  commentPreview={author:'Gaurang',comment:'dfds',rating:5,date:'14-07-1998'};

  
  constructor( public dialogRef:MatDialogRef<CommentPreviewComponent>) { }

  ngOnInit() {
    
  }
  onSubmit(){
    this.dialogRef.close();
  }
}
