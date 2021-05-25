import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CooperativesocietyserviceService } from '../cooperativesocietyservice.service';
import { CooperativeSociety } from '../models/CooperativeSociety';

@Component({
  selector: 'app-cooperativesociety-details',
  templateUrl: './cooperativesociety-details.component.html',
  styleUrls: ['./cooperativesociety-details.component.css']
})
export class CooperativesocietyDetailsComponent implements OnInit {

  sid :number;
  society:CooperativeSociety;
  
  constructor(private route:ActivatedRoute,private router:Router,private cooperativeService:CooperativesocietyserviceService) { }

  ngOnInit(): void {
    this.society = new CooperativeSociety();
    this.sid = this.route.snapshot.params['societyId'];
    this.cooperativeService.getSociety(this.sid).subscribe(selectedSociety=>{
      console.log(selectedSociety);
      this.society = selectedSociety;
    },error => console.log(error));
  }

  goToSocietyList(){
    this.router.navigate(['societies']);
  }

}
