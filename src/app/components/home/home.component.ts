import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { MovieServiceService } from 'src/app/service/movie-service.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { map } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  public movies : any
  public TopRated : any
  public sortedArray :any
  public Nowshowing :any

  img:any = "https://image.tmdb.org/t/p/original"

 
  
  constructor(private serviceApi:ApiServiceService,private movService:MovieServiceService){}

  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: true,
  //   touchDrag: true,
  //   pullDrag: true,
  //   dots: true,
  //   autoplay:true,
  //   lazyLoad:true,
  //   autoplayTimeout:1000,
  //   navSpeed: 100,
  //   navText: ['< Prev', 'Next >'],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 3
  //     },
  //     940: {
  //       items: 1
  //     }
  //   },
  //   nav: true

  // }


  ngOnInit(): void {
    this.serviceApi.getApi().subscribe((res)=>{
      this.Nowshowing = res.results
      
      this.movies = this.Nowshowing.slice(9,19)
      console.log(this.movies);
    })
    this.serviceApi.getTopRated().subscribe((res)=>{
      this.TopRated=res
      this.sortedArray = this.TopRated.results.splice(0,12)
    })
  }
  sentMovieOB(i:any){
    // this.clickedMovie=i
    // console.log(i);
    // this.movService.clickedMovie.push(i)
    // console.log(i);
    
    // this.currentItem.push(i)
    // console.log(this.currentItem[0]);

    this.movService.idee=i
    console.log(this.movService.idee);
    
  }

  // clickEvent(event:any) {
  //   // Haven't really got far
  //   var targetEle = event.srcElement.attributes.class;
  // }
  clickEvent(event:any) {
    
    
  } 
}
