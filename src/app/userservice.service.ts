import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpclient:HttpClient) { }
 
  getUsersList() : Observable<any>{
    console.log("view all Users URL is calling here");
    return this.httpclient.get('http://localhost:8079/user/viewall');

  }

  createUser(user:User) :Observable<any>{
    console.log("add user method is calling here");
    return this.httpclient.post('http://localhost:8079/user/add',user);

  }

  getUser(userId:number) : Observable<any>{
    console.log("get user by id method is calling here");
    return this.httpclient.get('http://localhost:8079/user/viewbyid/'+userId);

  }

  deleteUser(userId:number) : Observable<any>{
    console.log("delete user by id method is calling here");
    return this.httpclient.delete('http://localhost:8079/user/del/'+userId);

  }

  updateUser(userId:number,value : any) : Observable<any> {
    console.log("update user by id method is calling here");
    return this.httpclient.put('http://localhost:8079/user/update/'+userId,value);
  }

  loginUser(emailId:string,password : string) : Observable<any> {
    console.log("Login User method is calling here");
    let params = new HttpParams().set('emailId',emailId).set('password',password);
    return this.httpclient.get('http://localhost:8079/user/login',{params});
  }

}
