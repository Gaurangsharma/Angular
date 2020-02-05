import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';

import { Observable,of } from "rxjs";
import { delay,map,catchError } from "rxjs/operators";
import { baseURL } from "../shared/baseurl";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ProcessHttpMsgService } from "./process-http-msg.service";


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient,private processHttpService:ProcessHttpMsgService) { }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(baseURL + 'dishes')
    .pipe(catchError(this.processHttpService.handleError));
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get<Dish>(baseURL + 'dishes/' + id)
    .pipe(catchError(this.processHttpService.handleError));
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]))
    .pipe(catchError(this.processHttpService.handleError));
  } 

  getDishIds(): Observable<number[] | any> {
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)))
    .pipe(catchError(error=>error));
  }
  putDish(dish: Dish): Observable<Dish> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<Dish>(baseURL + 'dishes/' + dish.id, dish, httpOptions)
      .pipe(catchError(this.processHttpService.handleError));

  }
}
