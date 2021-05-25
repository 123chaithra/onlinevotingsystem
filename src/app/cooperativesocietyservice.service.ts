import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CooperativeSociety } from './models/CooperativeSociety';

@Injectable({
  providedIn: 'root'
})
export class CooperativesocietyserviceService {

  constructor(private httpclient:HttpClient) { }

  getSocietyList() : Observable<any>{
    console.log("view all societies URL is calling here");
    return this.httpclient.get('http://localhost:8079/society/viewall');

  }

  createSociety(society:CooperativeSociety) :Observable<any>{
    console.log("add society method is calling here");
    return this.httpclient.post('http://localhost:8079/society/add',society);

  }
  getSociety(societyId:number) : Observable<any>{
    console.log("get society by id method is calling here");
    return this.httpclient.get('http://localhost:8079/society/viewbyid/'+societyId);

  }
  deleteSociety(societyId:number) : Observable<any>{
    console.log("delete society by id method is calling here");
    return this.httpclient.delete('http://localhost:8079/society/del/'+societyId);

  }
  updateSociety(societyId:number,value : any) : Observable<any> {
    console.log("update society by id method is calling here");
    return this.httpclient.put('http://localhost:8079/society/update/'+societyId,value);
  }



}
