import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VotedlistserviceService {

  constructor(private httpclient:HttpClient) { }

  getVotedList(): Observable<any>{
    console.log("view all voted list url is calling here");
    return this.httpclient.get('http://localhost:8079/votedlist/viewall');
  
  }
  
  getvotedlistbyid(id:number) : Observable<any>{
    console.log("get voted voter by id method is calling here");
    return this.httpclient.get('http://localhost:8079/votedlist/viewbyid/'+id);
  }
  
}
