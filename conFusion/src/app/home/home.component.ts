import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from "../shared/leader";
import { LeadersService } from "../services/leaders.service";
import { baseURL } from "../shared/baseurl";
import { visibility,flyInOut ,expands} from "../animation/app.animation";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host:{
    '[@flyInOut]':'true',
    'style':'display:block;'
  },
  animations:[
    flyInOut(),
    expands()
  ]
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;
  leader:Leader;
  basePath:string;
  homeerrMsg:string;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
  private leaderservice:LeadersService) { }

  ngOnInit() {
    this.basePath=baseURL;
    this.dishservice.getFeaturedDish()
    .subscribe(dish=>this.dish=dish,homeerrMsg=>this.homeerrMsg=<any>homeerrMsg);
    this.promotionservice.getFeaturedPromotion()
    .subscribe((promotion)=>this.promotion=promotion,homeerrMsg=>this.homeerrMsg=<any>homeerrMsg);
    this.leaderservice.getFeaturedLeader()
    .subscribe((leader)=>this.leader=leader,homeerrMsg=>this.homeerrMsg=<any>homeerrMsg);
  }
}
