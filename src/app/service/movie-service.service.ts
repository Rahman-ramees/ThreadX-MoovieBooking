import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService implements OnInit{

  idee:any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
  }
  checkeId(){
    return this.http.get(`https://api.themoviedb.org/3/movie/${this.idee}?api_key=2835f8a145d9a662b82be59b95265097`)
  }
}
