import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CooperativesocietyserviceService } from '../cooperativesocietyservice.service';
import { CooperativeSociety } from '../models/CooperativeSociety';

@Component({
  selector: 'app-update-cooperativesociety',
  templateUrl: './update-cooperativesociety.component.html',
  styleUrls: ['./update-cooperativesociety.component.css']
})
export class UpdateCooperativesocietyComponent implements OnInit {

  sid : number;
  society : CooperativeSociety;

  constructor(private route:ActivatedRoute,private router :Router,private coopsocService:CooperativesocietyserviceService) { }

  ngOnInit(): void {
    this.society = new CooperativeSociety();
    this.sid = this.route.snapshot.params['societyId'];
    this.coopsocService.getSociety(this.sid).subscribe(
      selectedsociety => {
        console.log(selectedsociety);
        this.society = selectedsociety;
      }, error => console.log(error)
    );
  }

  updateSociety(){
    this.coopsocService.updateSociety(this.sid,this.society).subscribe(
      updatedSociety =>{
        console.log(updatedSociety);
        this.society = new CooperativeSociety();
        this.goToSocietyList();
        
      }, error => console.log(error)

    );
  }
  
  goToSocietyList() {
    this.router.navigate(['/societies']); 
  }

  onSubmit(){
    this.updateSociety();
  }

}
