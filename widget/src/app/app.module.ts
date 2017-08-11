import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { RouterModule, Routes} from "@angular/router";
import { UsernameComponent } from './list/username/username.component';
import { UserinfoComponent } from './list/userinfo/userinfo.component';
import { UserchangeComponent } from './list/userchange/userchange.component';
import { UsermanageComponent } from './list/usermanage/usermanage.component';
import { ChangepwdComponent } from './list/changepwd/changepwd.component';
import { FooterComponent } from './footer/footer.component';
import {HttpModule} from "@angular/http";
import { HomeComponent } from './list/home/home.component';

const routeconfig:Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'changepwd', component: ChangepwdComponent},
  {path:'username', component: UsernameComponent},
  {path:'userinfo', component: UserinfoComponent},
  {path:'userchange', component: UserchangeComponent},
  {path:'usermanage', component: UsermanageComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    UsernameComponent,
    UserinfoComponent,
    UserchangeComponent,
    UsermanageComponent,
    ChangepwdComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routeconfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
