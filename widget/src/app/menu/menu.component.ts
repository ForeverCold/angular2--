import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus:Array<Menu>;

  listNumber: number;

  constructor(public router:Router) {
    console.log(this.listNumber);
    router.events
    .filter(event => event instanceof NavigationEnd)
    .subscribe((event: NavigationEnd)=>{
      if(event.url == '/home'){
          this.listNumber = 0;
        }else if(event.url == '/changepwd') {
          this.listNumber = 1;
        }else if(event.url == '/username') {
          this.listNumber = 2;
        }else if(event.url == '/userinfo') {
          this.listNumber = 3;
        }else if(event.url == '/userchange') {
          this.listNumber = 4;
        }else if(event.url == '/usermanage') {
          this.listNumber = 5;
        }
    })
  }

  ngOnInit() {
    this.menus = [
      new Menu(0, '1', 'home'),
      new Menu(1, '2','changepwd'),
      new Menu(2, '3','username'),
      new Menu(3, '4','userinfo'),
      new Menu(4, '5','userchange'),
      new Menu(5, '6','usermanage')
    ];
  }

  nav(menu: Menu) {
    console.log(menu.id);
    this.router.navigateByUrl(menu.link);
    this.listNumber = menu.id;
  }

}

export class Menu{
  constructor(
    public id: number,
    public name: string,
    public link: string
  ){

  }
}
