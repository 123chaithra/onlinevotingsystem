import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private httpclient:HttpClient) { }

  loginAdmin(emailId:string,password : string) : Observable<any> {
    console.log("Login Admin method is calling here");
    let params = new HttpParams().set('emailId',emailId).set('password',password);
    return this.httpclient.get('http://localhost:8079/admin/login',{params});
  }
}
