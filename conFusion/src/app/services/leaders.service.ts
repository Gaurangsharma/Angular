import { Injectable } from '@angular/core';

import { Leader } from "../shared/leader";
import { LEADERS } from "../shared/leaders";

@Injectable({
  providedIn: 'root'
})
export class LeadersService {

  constructor() { }


  getLeaders():Promise<Leader[]>{
    return Promise.resolve(LEADERS);
  }

  getLeader(id: string):Promise<Leader> {
    console.log("Dish Filtered");
    return Promise.resolve(LEADERS.filter((Leader)=>(Leader.id===id))[0]);
  }

  getFeaturedLeader():Promise<Leader> {
    return Promise.resolve(LEADERS.filter((Leader)=>Leader.featured)[0]);
  }
}