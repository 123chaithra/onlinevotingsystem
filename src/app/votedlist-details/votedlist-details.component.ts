import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VotedList } from '../models/Votedlist';
import { VotedlistserviceService } from '../votedlistservice.service';

@Component({
  selector: 'app-votedlist-details',
  templateUrl: './votedlist-details.component.html',
  styleUrls: ['./votedlist-details.component.css']
})
export class VotedlistDetailsComponent implements OnInit {

  vid : number;
  votedlist : VotedList;
  
  constructor(private route:ActivatedRoute,private router: Router,private votedlistService:VotedlistserviceService) { }

  ngOnInit(): void {
    this.votedlist= new VotedList();
    this.vid = this.route.snapshot.params['id'];
    this.votedlistService.getvotedlistbyid(this.vid).subscribe(selectedList=>{
      console.log(selectedList);
      this.votedlist = selectedList;

    },error => console.log(error));
  }

  goToVotedList()
    {
      this.router.navigate(['listofvotedlist']);
    }

}
