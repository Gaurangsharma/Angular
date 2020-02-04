import { Component, OnInit, ViewChild } from '@angular/core';
import { Dish } from "../shared/dish";
import { DishService } from "../services/dish.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Comment } from "../shared/comment";
import { switchMap } from 'rxjs/operators';
import { baseURL } from "../shared/baseurl";
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.scss']
})
export class DishDetailsComponent implements OnInit {

  dishIds: string[];
  prev: string;
  next: string;
  dish: Dish;
  comment: Comment;
  commentForm: FormGroup;
  basePath: string;

  @ViewChild('fform') commentFormDirective;

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    private http:HttpClient) {
    this.createForm();
  }

  ngOnInit() {
    this.basePath=baseURL;
    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params.pipe(switchMap((params: Params) => this.dishservice.getDish(params['id'])))
      .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }


  goBack(): void {
    this.location.back();
  }

  formErrors = {
    'author': '',
    'comment': '',
  };

  validationMessages = {
    author: {
      'required': 'Author Name is required',
      'minlength': 'Author Name is atleast 2 char Long',
    },
    comment: {
      'required': 'Email is required',
    },
  }

  createForm() {
    this.commentForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2)]],
      rating: [5, [Validators.required]],
      comment: '',
      date: ''
    });
    this.commentForm.valueChanges.subscribe(data => this.onValueChanged(data));

  }
  onSubmit() {
    this.comment = this.commentForm.value;
    let datee = new Date();
    let isoDate = datee.toISOString();
    this.comment.date = isoDate;
    console.log(this.comment);
    console.log(this.dish);
    this.dish.comments.push(this.comment);
    this.commentForm.reset({
      author: '',
      rating: 5,
      comment: '',
      date: ''
    });
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) { return; }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

}
