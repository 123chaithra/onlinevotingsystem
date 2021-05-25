import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NominatedCandidates } from './models/NominatedCandidates';
@Injectable({
  providedIn: 'root'
})
export class NominatedcandidatesserviceService {

  constructor(private httpclient:HttpClient) { }
  
  getNominatedCandidatesList() : Observable<any>{
    console.log("view all NominatedCandidates URL is calling here");
    return this.httpclient.get('http://localhost:8079/candidates/viewall');
  
  }
  
  createNominatedCandidate(nominatedcandidate:NominatedCandidates) :Observable<any>{
    console.log("add Nominatedcandidates method is calling here");
    return this.httpclient.post('http://localhost:8079/candidates/add',nominatedcandidate);
  
  }
  
  getNominatedCandidate(candidateId:number) : Observable<any>{
    console.log("get Nominatedcandidates by id method is calling here");
    return this.httpclient.get('http://localhost:8079/candidates/viewbycandidateid/'+candidateId);
  
  }
  
  deleteNominatedCandidate(candidateId:number) : Observable<any>{
    console.log("delete Nominatedcandidates by id method is calling here");
    return this.httpclient.delete('http://localhost:8079/candidates/del/'+candidateId);
  }
  
  updateNominatedCandidate(candidateId:number,value : any) : Observable<any> {
    console.log("update Nominatedcandidates by id method is calling here");
    return this.httpclient.put('http://localhost:8079/candidates/update/'+candidateId,value);
  }
  getRegSocietyVoters() : Observable<any>{
    return this.httpclient.get('http://localhost:8079/RegisteredSocietyVoters/viewall');
  }
  
  
  }

