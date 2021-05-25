import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ElectionresultserviceService } from '../electionresultservice.service';
import { ElectionResult } from '../models/ElectionResult';

@Component({
  selector: 'app-electionresult-list',
  templateUrl: './electionresult-list.component.html',
  styleUrls: ['./electionresult-list.component.css']
})
export class ElectionresultListComponent implements OnInit {

  electionresults: Observable<ElectionResult[]>;
  candid : number;
  

  constructor(private electionresultService: ElectionresultserviceService, private router:Router) { }

  ngOnInit(): void {
    this.reloadElectionResultData();
  }

  reloadElectionResultData(){
    this.electionresultService.getElectionresultList().subscribe(
      electionresult =>{
        this.electionresults = electionresult
      }
    );
  }

  ElectionresultDetails(Id: number){
      this.router.navigate(['resultdetails',Id]);
  }

}
