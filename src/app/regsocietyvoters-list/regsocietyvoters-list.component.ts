import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisteredSocietyVoters } from '../models/RegisteredSocietyVoters';
import { RegsocietyserviceService } from '../regsocietyservice.service';

@Component({
  selector: 'app-regsocietyvoters-list',
  templateUrl: './regsocietyvoters-list.component.html',
  styleUrls: ['./regsocietyvoters-list.component.css']
})
export class RegsocietyvotersListComponent implements OnInit {

  voters:Observable<RegisteredSocietyVoters[]>;
  constructor(private voterService:RegsocietyserviceService,private router:Router) { }

  ngOnInit(): void {
    this.reloadVoterData();
  }

  reloadVoterData(){
    this.voterService. getVotersList().subscribe(
      voters =>{
        this.voters = voters
      }
    );

  }

  removeVoter(id:number){
    this.voterService.deleteVoter(id).subscribe(
      result =>{
         console.log(result);
         alert(id + "deleted successfully");
         this.reloadVoterData();
      },
      error => console.log(error)
    );
    
  }

  VoterDetails(id:number){
    this.router.navigate(['voterdetails',id]);
  }

  createVoter(){
    this.router.navigate(['addvoter']);
  }

  updateVoter(id:number){
    this.router.navigate(['updatevoter',id]);
  }
  
}
