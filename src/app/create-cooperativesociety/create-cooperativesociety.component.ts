import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CooperativesocietyserviceService } from '../cooperativesocietyservice.service';
import { CooperativeSociety } from '../models/CooperativeSociety';

@Component({
  selector: 'app-create-cooperativesociety',
  templateUrl: './create-cooperativesociety.component.html',
  styleUrls: ['./create-cooperativesociety.component.css']
})
export class CreateCooperativesocietyComponent implements OnInit {

  society : CooperativeSociety = new CooperativeSociety();
  submitted = false;

  constructor(private router:Router,private coopService:CooperativesocietyserviceService) { }

  ngOnInit(): void {
  }

  createSociety(){
    console.log(this.society);
    this.coopService.createSociety(this.society).subscribe(
      result=>{
        console.log(result);
        this.society = new CooperativeSociety();
        this.goToSocietyList();
      },
      error => console.log(error)
    )
  }

  goToSocietyList() {
    this.router.navigate(['societies']);
  }

  onSubmit(){
    this.submitted = true;
    this.createSociety();
  }

}
