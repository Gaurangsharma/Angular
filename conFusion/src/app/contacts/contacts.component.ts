import { Component, OnInit ,ViewChild,Inject} from '@angular/core';

import { FormBuilder, FormGroup, Validator, Validators } from "@angular/forms";
import { Feedback, ContactType } from "../shared/feedback";
import { visibility, flyInOut, expands } from "../animation/app.animation";
import { FeedbackService } from "../services/feedback.service";


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display:block;'
  },
  animations: [
    flyInOut(),
    expands()
  ]
})
export class ContactsComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;
  returnedfeedback: Feedback[] = [];
  isSpinnerHidden: boolean = true;
  isFormHidden: boolean = false;
  isSubmitted: boolean = false;



  constructor(private fb: FormBuilder,
    private feedbackservice: FeedbackService) {
    this.createForm();
  }

  ngOnInit() {

  }
  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': '',
  };

  validationMessages = {
    firstname: {
      'required': 'First Name is required',
      'minlength': 'First Name is atleast 2 char Long',
      'maxlength': 'First Name is can not be more than 25 char long.'
    },
    lastname: {
      'required': 'Last Name is required',
      'minlength': 'Last Name is atleast 2 char Long',
      'maxlength': 'Last Name is can not be more than 25 char long.'
    },
    telnum: {
      'required': 'Tel No. is required',
      'pattern': 'Tel No. must only contain only numbers.',
    },
    email: {
      'required': 'Email is required',
      'email': 'Email is not in valid formate',
    },
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      telnum: [0, [Validators.required, Validators.pattern]],
      email: ['', Validators.required],
      agree: false,
      contacttype: 'None',
      message: '',
    });

    this.feedbackForm.valueChanges.subscribe(data => this.onValueChanged(data));
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    this.returnedfeedback = [];
    this.isFormHidden=true;
    this.isSubmitted=true;
    this.isSpinnerHidden=false;
    this.feedbackservice.putFeedback(this.feedback)
      .subscribe(feedback => {
        console.log('-return feedback', feedback)
        this.feedbackSubmitSuccess(feedback);
      });
    

  }

  feedbackSubmitSuccess(feedback) {
    this.returnedfeedback.push(feedback);
    setTimeout(()=>{
      this.returnedfeedback=null;
      this.isFormHidden=false;
      this.isSubmitted=false;
    },5000);
    this.resetingForm();

  }

  resetingForm() {
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: '',
    });
  }

  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
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
