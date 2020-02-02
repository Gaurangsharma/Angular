import { Component, OnInit ,ViewChild } from '@angular/core';

import { FormBuilder,FormGroup,Validator, Validators  } from "@angular/forms";
import { Feedback,ContactType } from "../shared/feedback";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;

  @ViewChild('fform') feedbackFormDirective;
  
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
   
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      telnum: [0,Validators.required],
      email: ['',Validators.required],
      agree: false,
      contacttype: 'None',
      message: ''
    });
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstname: '' ,
      lastname: '',
      telnum:  '',
      email:  '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
    this.feedbackFormDirective.resetForm();
  }

}
