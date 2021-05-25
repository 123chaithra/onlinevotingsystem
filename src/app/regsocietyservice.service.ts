import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisteredSocietyVoters } from './models/RegisteredSocietyVoters';

@Injectable({
  providedIn: 'root'
})
export class RegsocietyserviceService {

  constructor(private httpclient:HttpClient) { }

  
  getVotersList(): Observable<any>{
    console.log("view all voters URL is calling here");
    return this.httpclient.get('http://localhost:8079/RegisteredSocietyVoters/viewall');
  }

  getCorporateSocities() : Observable<any>{
  return this.httpclient.get('http://localhost:8079/society/viewall');
  }

  createVoter(voter:RegisteredSocietyVoters):Observable<any>{
    console.log("add voter method is calling here");
    return this.httpclient.post('http://localhost:8079/RegisteredSocietyVoters/add',voter);
  }
  
  getVoter(id:number) : Observable<any>{
    console.log("get voter by id method is calling here");
    return this.httpclient.get('http://localhost:8079/RegisteredSocietyVoters/viewbyid/'+id);

  }
  deleteVoter(id:number) : Observable<any>{
    console.log("delete voter by id method is calling here");
    return this.httpclient.delete('http://localhost:8079/RegisteredSocietyVoters/del/'+id);

  }

  updateVoter(id:number,value : any) : Observable<any> {
    console.log("update voter by id method is calling here");
    return this.httpclient.put('http://localhost:8079/RegisteredSocietyVoters/update/'+id,value);
  }

  loginVoter(emailId:string,password : string) : Observable<any> {
    console.log("Login Voter method is calling here");
    let params = new HttpParams().set('emailId',emailId).set('password',password);
    return this.httpclient.get('http://localhost:8079/RegisteredSocietyVoters/login',{params});
  }


}
