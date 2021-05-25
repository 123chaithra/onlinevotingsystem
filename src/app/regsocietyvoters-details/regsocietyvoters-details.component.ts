import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisteredSocietyVoters } from '../models/RegisteredSocietyVoters';
import { RegsocietyserviceService } from '../regsocietyservice.service';

@Component({
  selector: 'app-regsocietyvoters-details',
  templateUrl: './regsocietyvoters-details.component.html',
  styleUrls: ['./regsocietyvoters-details.component.css']
})
export class RegsocietyvotersDetailsComponent implements OnInit {

  vid:number;
  voter:RegisteredSocietyVoters
  
  constructor(private route:ActivatedRoute,private router:Router,private voterservice:RegsocietyserviceService) { }

  ngOnInit(): void {
    this.voter = new RegisteredSocietyVoters();
    this.vid = this.route.snapshot.params['id'];
    this.voterservice.getVoter(this.vid).subscribe(selectedVoter=>{
      console.log(selectedVoter);
      this.voter = selectedVoter;
    },error => console.log(error));
  }

  goToVoterList(){
    this.router.navigate(['voters']);
  }

}
