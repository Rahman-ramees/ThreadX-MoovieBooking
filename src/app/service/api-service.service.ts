import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService  implements OnInit{

  
  constructor(private http:HttpClient) { }

  getApi(){
    return this.http.get<any>('https://api.themoviedb.org/3/movie/now_playing?api_key=2835f8a145d9a662b82be59b95265097')
  } 
  getTopRated(){
    return this.http.get<any>('https://api.themoviedb.org/3/movie/upcoming?api_key=2835f8a145d9a662b82be59b95265097')
  } 
 
  getBakcent(){
    return this.http.get<any>('http://localhost:3000/mov')
    
  }

  ngOnInit(): void {
    
    
  }
}
