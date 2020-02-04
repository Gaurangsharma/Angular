import { Injectable } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProcessHttpMsgService {

  constructor() { }

  public handelError(error:HttpErrorResponse|any){
    let errMsg:string;
    console.log(error);
    if(error.error instanceof ErrorEvent){
      errMsg=error.error.message;
    }
    else{
      errMsg=`${error.status} -${error.statusText||''} ${ error.error}`;
    }

    return throwError(errMsg);
  }
}
