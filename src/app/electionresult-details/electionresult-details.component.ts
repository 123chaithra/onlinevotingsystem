import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElectionresultserviceService } from '../electionresultservice.service';
import { ElectionResult } from '../models/ElectionResult';

@Component({
  selector: 'app-electionresult-details',
  templateUrl: './electionresult-details.component.html',
  styleUrls: ['./electionresult-details.component.css']
})
export class ElectionresultDetailsComponent implements OnInit {

  erid:number;
  electionresult:ElectionResult;
  constructor(private route:ActivatedRoute,private router:Router,private electionresultService: ElectionresultserviceService) { }

  ngOnInit(): void {
    this.electionresult = new ElectionResult();
    this.erid = this.route.snapshot.params['Id'];
    this.electionresultService.getElectionresult(this.erid).subscribe(selectedElectionResult=>{
      console.log(selectedElectionResult);
      this.electionresult = selectedElectionResult;
    },error => console.log(error));
  }

  goToElectionResultList(){
    this.router.navigate(['electionresults']);
  }

}
