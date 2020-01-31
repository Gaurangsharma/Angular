import { Injectable } from '@angular/core';

import { PROMOTIONS } from "../shared/promotions";
import { Promotion } from "../shared/promotion";

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions():Promotion[]{
    return PROMOTIONS;
  }

  getPromotion(id: string):Promotion {
    return PROMOTIONS.filter((Promotion)=>(Promotion.id===id))[0];
  }

  getFeaturedPromotion():Promotion {
    return PROMOTIONS.filter((Promotion)=>Promotion.featured)[0];
  }
}
