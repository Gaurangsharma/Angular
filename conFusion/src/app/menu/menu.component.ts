import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { baseURL } from '../shared/baseurl';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];

  basePath: string;

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.basePath = baseURL;
    this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes);
  }

}
