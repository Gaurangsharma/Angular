import { Injectable } from '@angular/core';

import { PROMOTIONS } from "../shared/promotions";
import { Promotion } from "../shared/promotion";

import { Observable,of } from "rxjs";
import { delay,map,catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { baseURL } from "../shared/baseurl";
import { ProcessHttpMsgService } from "../services/process-http-msg.service";


@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http:HttpClient,
    private processHttpService:ProcessHttpMsgService) { }

  getPromotions():Observable<Promotion[]>{
    return  this.http.get<Promotion[]>(baseURL+'promotions')
    .pipe(catchError(this.processHttpService.handleError));
  }

  getPromotion(id: string):Observable<Promotion> {
    return this.http.get<Promotion>(baseURL+'promotions/'+id)
    .pipe(catchError(this.processHttpService.handleError));
  }

  getFeaturedPromotion():Observable<Promotion> {
    return this.http.get<Promotion[]>(baseURL+'promotions?featured=true').pipe(map(promotions=>promotions[0]))
    .pipe(catchError(this.processHttpService.handleError));
}
}
