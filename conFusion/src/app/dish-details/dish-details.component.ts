import { Component, OnInit } from '@angular/core';
import { Dish } from "../shared/dish";
import { DishService } from "../services/dish.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.scss']
})
export class DishDetailsComponent implements OnInit {
  
  dish:Dish;

  constructor(private dishservice:DishService, 
    private route:ActivatedRoute,
  private location:Location) { }

  ngOnInit() {
    const id =  this.route.snapshot.params['id'];
    console.log(id);
    this.dishservice.getDish(id)
    .then((dish)=>this.dish=dish);
    console.log(this.dish+"this1");
  }
  goBack(): void{
    this.location.back();
  }
}
