import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule, MatCard } from "@angular/material/card";
import { MatButtonModule, MatButton } from "@angular/material/button";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormField, MatFormFieldModule } from "@angular/material/form-field";
import { MatInput, MatInputModule } from "@angular/material/input";
import { MatCheckbox, MatCheckboxModule } from "@angular/material/checkbox";
import { MatSelectModule } from "@angular/material/select";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing/app-routing.module";


import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { DishDetailsComponent } from './dish-details/dish-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';
import { CommentPreviewComponent } from "./comment-preview/comment-preview.component";

import { DishService } from './services/dish.service';
import { PromotionService } from "./services/promotion.service";
import { LeadersService } from "./services/leaders.service";
import { baseURL } from './shared/baseurl';
import { ProcessHttpMsgService } from "./services/process-http-msg.service";
import { HighLightDirective } from './directives/high-light.directive';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishDetailsComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactsComponent,
    LoginComponent,
    CommentPreviewComponent,
    HighLightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatSliderModule,
  ],
  providers: [
    DishService,
    PromotionService,
    LeadersService,
    ProcessHttpMsgService,
    {provide:'BaseURL',useValue:baseURL}
  ],
  entryComponents:[
    LoginComponent,
    CommentPreviewComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
