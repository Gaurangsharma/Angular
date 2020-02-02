import { Routes } from "@angular/router";

import { MenuComponent } from '../menu/menu.component';
import { DishDetailsComponent } from '../dish-details/dish-details.component';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { ContactsComponent } from '../contacts/contacts.component';

export const routes:Routes =[
    { path:'home', component:HomeComponent},
    { path:'menu', component:MenuComponent},
    { path:'contact', component:ContactsComponent},
    { path:'about', component:AboutComponent},
    { path:"dishdetails/:id" ,component:DishDetailsComponent},
    { path:'', redirectTo:'/home',pathMatch:'full'}
];