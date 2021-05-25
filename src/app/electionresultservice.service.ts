import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElectionresultserviceService {

  constructor(private httpclient:HttpClient) { }

  getElectionresultList() : Observable<any>{
    console.log("view all  URL is calling here");
    return this.httpclient.get('http://localhost:8079/electionresult/viewall');

  }

  getElectionresult(candidateId:number) : Observable<any>{
    console.log("get Electionresult by id method is calling here");
    return this.httpclient.get('http://localhost:8079/electionresult/viewbyid/'+candidateId);

  }
  
  getVotingPercentage() : Observable<any>{
    console.log("view VotingPercentage  URL is calling here");
    return this.httpclient.get('http://localhost:8079/electionresult/votingpercentage');

  }

  getVotingCandidatePercentage(candidateId:number) : Observable<any>{
    console.log("view VotingCandidatePercentage  URL is calling here");
    return this.httpclient.get('http://localhost:8079/electionresult//votingcandidatepercentage/'+candidateId);

  }
  getHighVotingPercentageCandidate() : Observable<any>{
    console.log("view HighVotingPercentageCandidate  URL is calling here");
    return this.httpclient.get('http://localhost:8079/electionresult/highvotingpercentagecandidate');

  }
  
  getLowVotingPercentageCandidate() : Observable<any>{
    console.log("view LowVotingPercentageCandidate  URL is calling here");
    return this.httpclient.get('http://localhost:8079/electionresult/lowvotingpercentagecandidate');

  }

}
 