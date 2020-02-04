import { Injectable } from '@angular/core';

import { Leader } from "../shared/leader";

import { Observable,of } from "rxjs";
import { delay,map,catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { baseURL } from "../shared/baseurl";
import { ProcessHttpMsgService } from "../services/process-http-msg.service";

@Injectable({
  providedIn: 'root'
})
export class LeadersService {

  constructor(private http: HttpClient,
    private processHttpService:ProcessHttpMsgService) { }


  getLeaders():Observable<Leader[]>{
    return this.http.get<Leader[]>(baseURL+'leadership')
    .pipe(catchError(this.processHttpService.handelError));
  }

  getLeader(id: string):Observable<Leader> {
    return this.http.get<Leader>(baseURL+'leadership/'+id)
    .pipe(catchError(this.processHttpService.handelError));
  }

  getFeaturedLeader():Observable<Leader> {
    return this.http.get<Leader[]>(baseURL+'leadership?featured=true').pipe(map(leaders=>leaders[0]))
    .pipe(catchError(this.processHttpService.handelError));
  }
}
