import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CooperativesocietyserviceService } from '../cooperativesocietyservice.service';
import { CooperativeSociety } from '../models/CooperativeSociety';

@Component({
  selector: 'app-cooperativesociety-list',
  templateUrl: './cooperativesociety-list.component.html',
  styleUrls: ['./cooperativesociety-list.component.css']
})
export class CooperativesocietyListComponent implements OnInit {

  constructor(private societyService:CooperativesocietyserviceService,private router :Router) { }

  societies : Observable<CooperativeSociety[]>;

  ngOnInit(): void {
    this.reloadSocietyData();
  }

  
  reloadSocietyData(){
    this.societyService.getSocietyList().subscribe(
      societies =>{
        this.societies = societies
      }
    );
  }

  
  removeSociety(societyId:number){

    this.societyService.deleteSociety(societyId).subscribe(
      result =>{
        console.log(result);
        alert(societyId+"deleted succesfully");
      this.reloadSocietyData();
        },
      error => console.log(error)      
    );
  }

  SocietyDetails(societyId : number){
    this.router.navigate(['societydetails',societyId]);
  }

  createSociety(){
    this.router.navigate(['addsociety']);
  }

  updateSociety(societyId:number){
    this.router.navigate(['updatesociety',societyId]);
  }

}


