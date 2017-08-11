import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/filter';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pageTitle: string = '首页';
  pageDesc: string = '这里是首页';

  constructor(public router: Router) {
    router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd)=>{
        if(event.url == '/home'){
          this.pageTitle = '首页'
          this.pageDesc = '这里是首页'
        }
        else if(event.url == '/changepwd') {
          this.pageTitle = '修改密码';
          this.pageDesc = '这里是修改密码';
        }else if(event.url == '/username') {
          this.pageTitle = '用户实名认证';
          this.pageDesc = '这里是用户实名认证';
        }else if(event.url == '/userinfo') {
          this.pageTitle = '用户基础信息维护';
          this.pageDesc = '这里是用户基础信息维护';
        }else if(event.url == '/userchange') {
          this.pageTitle = '用户权限信息修改';
          this.pageDesc = '这里是用户权限信息修改';
        }else if(event.url == '/usermanage') {
          this.pageTitle = '机构用户管理';
          this.pageDesc = '这里是机构用户管理';
        }
      })
  }

  ngOnInit() {
  }

}
