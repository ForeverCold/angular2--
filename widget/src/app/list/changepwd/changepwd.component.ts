import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { conFirmP } from "../../Validators/Validators";
import {Http} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import { Md5 } from "ts-md5/dist/md5"

@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.component.html',
  styleUrls: ['./changepwd.component.css']
})
export class ChangepwdComponent implements OnInit {

  formModel: FormGroup;
  dataInfo: Observable<any>;
  datas: object;
  requestInfo = {
    'Ip': '200.31.224.21',
  }

  //构造函数，依赖注入
  constructor(public http: Http, public router:Router) {
  }

  ngOnInit() {
    //表单数据模型
    const fb = new FormBuilder();
    this.formModel = fb.group({
      userName: [''],
      passWordInfo: fb.group({
        passWord: ['',  [Validators.required, Validators.pattern(/^[a-z]{6,10}$/)]],
        confirmPwd: ['', [Validators.required]]
      }, {validator: conFirmP})
    });

    //请求初始数据，重置表单数据
    this.http.get('/api/changepwd').map(res => res.json())
      .subscribe(data => {
        this.formModel.reset({
          userName: data.username
        })
      })
  }

  //点击取消回到主页
  canCel() {
    this.router.navigateByUrl('/home');
  }

  //提交表单数据发送到后台
  conFirm() {
    Object.assign(this.requestInfo, this.formModel.value);
    //MD5 加密
    this.requestInfo['passWordInfo'].confirmPwd= Md5.hashStr(this.formModel.get('passWordInfo.confirmPwd').value).toString();
    this.requestInfo['passWordInfo'].passWord= Md5.hashStr(this.formModel.get('passWordInfo.passWord').value).toString();
     this.http.post('/api/changepwd', this.requestInfo)
      .subscribe(res =>　{
        this.datas = res.json();
        if(this.datas['req_code'] == '000000') {
          alert('修改密码成功');
          this.canCel();
        }
        else {
          alert('密码修改失败请重新尝试');
        }
      })
  }
}
