import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NominatedCandidates } from '../models/NominatedCandidates';
import { NominatedcandidatesserviceService } from '../nominatedcandidatesservice.service';

@Component({
  selector: 'app-nominatedcandidates-list',
  templateUrl: './nominatedcandidates-list.component.html',
  styleUrls: ['./nominatedcandidates-list.component.css']
})
export class NominatedcandidatesListComponent implements OnInit {
  nominatedcandidates : Observable<NominatedCandidates[]>;
  constructor(private nomiatedCandidateService:NominatedcandidatesserviceService,private router:Router) { }


  ngOnInit(): void {
    this.reloadNominatedCandidateData();
  }

  reloadNominatedCandidateData(){
    this.nomiatedCandidateService.getNominatedCandidatesList().subscribe(
      nominatedcandidates =>{
        this.nominatedcandidates = nominatedcandidates
      }
    );
  }

removeNominatedCandidate(candidateId:number){
  this.nomiatedCandidateService.deleteNominatedCandidate(candidateId).subscribe(
    result =>{
       console.log(result);
       alert(candidateId + "deleted successfully");
       this.reloadNominatedCandidateData();
    },
    error => console.log(error)
  );

  }

  nominatedcandidatesDetails(candidateId:number){
    this.router.navigate(['nominatedcandidatedetails',candidateId]);
  }
  createNominatedcandidates(){
    this.router.navigate(['addnominatedcandidate']);
  }
  updateNominatedcandidates(candidateId:number){
    this.router.navigate(['updatenominatedcandidate',candidateId]);
  }

}

