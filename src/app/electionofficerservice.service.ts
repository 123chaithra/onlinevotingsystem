import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElectionofficerserviceService {

  constructor(private httpclient:HttpClient) { }

  loginOfficer(emailId:string,password : string) : Observable<any> {
    console.log("Login Officer method is calling here");
    let params = new HttpParams().set('emailId',emailId).set('password',password);
    return this.httpclient.get('http://localhost:8079/electionofficer/login',{params});
  }

}
