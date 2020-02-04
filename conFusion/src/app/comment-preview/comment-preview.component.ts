import { Component, OnInit ,Input} from '@angular/core';
import { MatDialogModule,MatDialogRef } from "@angular/material/dialog";
import { Comment } from "../shared/comment";

@Component({
  selector: 'app-comment-preview',
  templateUrl: './comment-preview.component.html',
  styleUrls: ['./comment-preview.component.scss']
})
export class CommentPreviewComponent implements OnInit {

  @Input()
  commentPreview:Comment;

  constructor(public dialogRef:MatDialogRef<CommentPreviewComponent>) { }

  ngOnInit() {
  }
  onSubmit(){
    this.dialogRef.close();
  }

}
