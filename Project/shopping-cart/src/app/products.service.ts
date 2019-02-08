import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  obj;
  prods = [];
  name;
  cartArr:Array<any> = [];
  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any> {
    this.obj = (this.httpClient.get('http://127.0.0.1:4201/home'));
    return this.obj;
  }

  regLogin(name, pass, mail) {
    var temObj = {"name": name, "password" : pass, "mailId" : mail}; 
    let flag = this.httpClient.post('http://127.0.0.1:4201/signup', temObj);
    return flag;
  }

  checkLogin(name, pass) {
    const headers = new HttpHeaders().set('Authorization', 'my-auth-token').set('Content-Type', 'application/json');
    var temp = {"name": name, "password": pass};
    let fla = this.httpClient.post('http://127.0.0.1:4201/login', temp, {
      headers: headers
    });
    return fla;
  }

  addReview(index, rvw) {
    var reviewObj = {"index": index, "review" : rvw}; 
    let flag = this.httpClient.post('http://127.0.0.1:4201/review', reviewObj);
    return flag;

  }
}