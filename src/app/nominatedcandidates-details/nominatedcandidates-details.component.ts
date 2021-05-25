import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NominatedCandidates } from '../models/NominatedCandidates';
import { NominatedcandidatesserviceService } from '../nominatedcandidatesservice.service';

@Component({
  selector: 'app-nominatedcandidates-details',
  templateUrl: './nominatedcandidates-details.component.html',
  styleUrls: ['./nominatedcandidates-details.component.css']
})
export class NominatedcandidatesDetailsComponent implements OnInit {
  cid:number;
  nominatedcandidate:NominatedCandidates;
  constructor(private route:ActivatedRoute,private router:Router, private nominatedCandidatesService:NominatedcandidatesserviceService) { } 

  ngOnInit(): void {
    this.nominatedcandidate = new NominatedCandidates();
   this.cid = this.route.snapshot.params['candidateId'];
   this.nominatedCandidatesService.getNominatedCandidate(this.cid).subscribe(selectedNomiatedCandidate=>{
    console.log(selectedNomiatedCandidate);
    this.nominatedcandidate = selectedNomiatedCandidate;
  },error => console.log(error));
   }
   goToNominatedCandidateList(){
    this.router.navigate(['nominatedcandidatedetails']);
  }

}
