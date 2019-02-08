import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ifloggedin = false;
  username;
  password;
  flag: boolean; 
  fl: any;
  flg: boolean;
  lFlag:boolean = false;
  temp: boolean;
  blankInput: boolean;
  constructor(public data : ProductsService,
    private router: Router) { }

  ngOnInit() {
  }

  submit() {
    if((this.username == "")||(this.password == "")){
      this.blankInput = true;
    }else {
      this. fl = this.data.checkLogin(this.username, this.password);
      this.fl.subscribe(x => {this.flag = x;
        if(this.flag === true) {
          this.router.navigate(['/home']);
          this.ifloggedin = true;
      }else {
          this.temp = true;
      };
    });
  }

  }

}
