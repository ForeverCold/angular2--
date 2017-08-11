import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Http} from "@angular/http";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-userchange',
  templateUrl: './userchange.component.html',
  styleUrls: ['./userchange.component.css']
})
export class UserchangeComponent implements OnInit {

  data: any;

  formModel: FormGroup;

  private permissionsList = [
    {code: 1000, text: '1', checked: null, permissionsNumber: 0,
      sublist: null},
    {code: 2000, text: '2', checked: null, permissionsNumber: 0,
      sublist: [
        {code: 2001, text: '201', checked: null},
        {code: 2002, text: '202', checked: null}
      ]},
    {code: 3000, text: '3', checked: null, permissionsNumber: 2,
      sublist: [
        {code: 3001, text: '301', checked: null},
        {code: 3002, text: '302', checked: null},
        {code: 3003, text: '303', checked: null}
      ]},
  ];

  constructor(private router: Router,private http: Http) { }

  //全选，反选
  selectCheckbox(event, item) {
    if(item.sublist) {
      item.sublist.forEach(e => {
        if(event.target.checked) {
          e.checked = e.code;
        }else {
          e.checked = null;
        }
      })
    }
  }

  reverseCheckbox(event, item, sitem) {

    if(event.target.checked) {
      sitem.checked = sitem.code;
    }else {
      sitem.checked = null;
    };
    item.sublist.forEach(e => {
      if(e.checked) {
        console.log('success');
        item.checked = item.code;
      } else {
        console.log('error');
        item.checked = null;
      }
    })
 }

  ngOnInit() {
    const fb = new FormBuilder();
    this.formModel = fb.group({
      name: ['',[Validators.required]],
      main: fb.array([
        new FormControl(false),
        new FormControl(false),
        new FormControl(false)
      ]),
      vice: fb.array([
        new FormControl(false),
        new FormControl(false),
        new FormControl(false),
        new FormControl(false),
        new FormControl(false),
      ]),
    })

  }

  query() {
    let username = this.formModel.get('name').value;
    console.log(username);
    let params = new URLSearchParams();
    params.set('name', username);
    this.http.get('/api/userchange', {search:  params.toString()} ).map(res => res.json())
      .subscribe(data => {
        console.log(data);
      })
  }


  confirm() {
    console.log(this.formModel.value);
    this.http.post('/api/userchange', this.formModel.value)
      .subscribe(res => {
        console.log(res.json());
      })
  }

  cancel() {
    this.router.navigateByUrl('/home')
  }

}


