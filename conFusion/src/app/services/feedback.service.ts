import { Injectable } from '@angular/core';
import { Observable,of } from "rxjs";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { baseURL } from "../shared/baseurl";
import { Feedback } from "../shared/feedback";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) { }

  getFeedback(id: string):Observable<Feedback> {
    return this.http.get<Feedback>(baseURL+'feedback/'+id);
  }

  putFeedback(feedback: Feedback): Observable<Feedback> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log(feedback+ "Inside putfeedback");
    return this.http.post<Feedback>(baseURL + 'feedback', feedback, httpOptions);
  }
}
