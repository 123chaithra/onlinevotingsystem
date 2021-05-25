import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NominatedCandidates } from '../models/NominatedCandidates';
import { NominatedcandidatesserviceService } from '../nominatedcandidatesservice.service';

@Component({
  selector: 'app-update-nominatedcandidates',
  templateUrl: './update-nominatedcandidates.component.html',
  styleUrls: ['./update-nominatedcandidates.component.css']
})
export class UpdateNominatedcandidatesComponent implements OnInit {
  cid:number;
  nominatedcandidate:NominatedCandidates;
 constructor(private route:ActivatedRoute,
    private router:Router, private nominatedCandidateService:NominatedcandidatesserviceService) { } 


  ngOnInit(): void {
    this.nominatedcandidate = new NominatedCandidates();
   this.cid = this.route.snapshot.params['candidateId'];
   this.nominatedCandidateService.getNominatedCandidate(this.cid).subscribe(
     selectedNominatedCandidate=>{
      console.log(selectedNominatedCandidate);
      this.nominatedcandidate = selectedNominatedCandidate;
    }, error => console.log(error)
 );
  }

  updateNominatedcandidate(){
    this.nominatedCandidateService.updateNominatedCandidate(this.cid,this.nominatedcandidate).subscribe(
      updatedProduct =>{
      console.log(updatedProduct);
      this.nominatedcandidate = new NominatedCandidates();
      this.goToNominatedcandidatesList();
      }, error => console.log(error)
    );
  }

  goToNominatedcandidatesList(){
    this.router.navigate(['/nominatedcandidates']);
    }
  onSubmit(){
    this.updateNominatedcandidate();
    }

}
