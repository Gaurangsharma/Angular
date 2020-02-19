import { Routes } from "@angular/router";

import { MenuComponent } from '../menu/menu.component';
import { DishDetailsComponent } from '../dish-details/dish-details.component';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { ParentComponent } from "../parent/parent.component";
import { ChildComponent } from "../child/child.component";

export const routes:Routes =[
    { path:'home', component:HomeComponent},
    { path:'menu', component:MenuComponent},
    { path:'contact', component:ContactsComponent},
    { path:'about', component:AboutComponent},
    { path:'child', component:ChildComponent},
    { path:'parent', component:ParentComponent},
    { path:"dishdetails/:id" ,component:DishDetailsComponent},
    { path:'', redirectTo:'/home',pathMatch:'full'}
];