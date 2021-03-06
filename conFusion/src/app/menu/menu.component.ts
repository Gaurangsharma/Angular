import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { baseURL } from '../shared/baseurl';
import { flyInOut,expands } from "../animation/app.animation";
import { expand } from 'rxjs/operators';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host:{
    '[@flyInOut]':'true',
    'style':'display:block;'
  },
  animations:[
    flyInOut(),
    expands()
  ]
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  basePath: string;
  menuerrMsg:string;

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.basePath = baseURL;
    this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes,menuerrMsg=>this.menuerrMsg=<any>menuerrMsg);
  }

}
