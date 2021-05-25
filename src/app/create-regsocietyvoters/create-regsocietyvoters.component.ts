import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CooperativeSociety } from '../models/CooperativeSociety';
import { RegisteredSocietyVoters } from '../models/RegisteredSocietyVoters';
import { RegsocietyserviceService } from '../regsocietyservice.service';

@Component({
  selector: 'app-create-regsocietyvoters',
  templateUrl: './create-regsocietyvoters.component.html',
  styleUrls: ['./create-regsocietyvoters.component.css']
})
export class CreateRegsocietyvotersComponent implements OnInit {

  public societyIds : Array<Int16Array>=[];
  public socities : Array<CooperativeSociety>=[];
  
  voter:RegisteredSocietyVoters = new RegisteredSocietyVoters();
  submitted = false;

  constructor(private router:Router,private voterservice:RegsocietyserviceService) { }

  ngOnInit(): void {
    this.loadCorporateSocities();
  }

  loadCorporateSocities(){
    this.voterservice.getCorporateSocities().subscribe(
      data=>{
        data.forEach((item)=>{
          this.societyIds.push(item["societyId"]);
          })
          this.socities=data;
        })
  }
  OnSelectSociety(id){
    let obj = this.socities.find(society=>society.societyId === Number(id))
    this.voter.society.societyId = id;
    this.voter.society.societyName = obj.societyName;
    this.voter.society.headOfSociety = obj.headOfSociety;
    this.voter.society.village = obj.village;
    this.voter.society.mandal = obj.mandal;
    this.voter.society.district = obj.district;
    this.voter.society.pincode = obj.pincode;
  }

  createVoter() {
    console.log(this.voter);
    this.voterservice.createVoter(this.voter).subscribe(
      result => {
        console.log(result);
        this.voter = new RegisteredSocietyVoters();
        this.goToVoterList();
      },
      error => console.log(error)
    );
  }
  goToVoterList() {
    this.router.navigate(['voters']);
  }

  onSubmit() {
    this.submitted = true;
    this.createVoter();
  }

}
