import { Component, Input, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/service/movie-service.service';
import {MatTabsModule} from '@angular/material/tabs';
import { RouterEvent, RouterLink } from '@angular/router';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit{
  img:any = "https://image.tmdb.org/t/p/original"

  clickedM :any 
  SeatWindow=false
  constructor(private movieService:MovieServiceService){}

  ngOnInit(): void {
    
    this.movieService.checkeId().subscribe((res)=>{
      // console.log(res);
      
      this.clickedM=res
      console.log(this.clickedM);
    })
  }

  showSeat(){

  }

}
