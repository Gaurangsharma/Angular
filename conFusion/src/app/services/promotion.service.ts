import { Injectable } from '@angular/core';

import { PROMOTIONS } from "../shared/promotions";
import { Promotion } from "../shared/promotion";

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions():Promise<Promotion[]>{
    return  new Promise(resolve=>{
      setTimeout(() => {
        resolve(PROMOTIONS);
      }, 2000);
  });
  }

  getPromotion(id: string):Promise<Promotion> {
    return  new Promise(resolve=>{
      setTimeout(() => {
        resolve(PROMOTIONS.filter((Promotion)=>(Promotion.id===id))[0]);
      }, 2000);
  });
  }

  getFeaturedPromotion():Promise<Promotion> {
    return  new Promise(resolve=>{
      setTimeout(() => {
        resolve(PROMOTIONS.filter((Promotion)=>Promotion.featured)[0]);
      }, 2000);
  });
  }
}
