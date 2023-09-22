import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit{

  apimovie:any
  constructor (private http:HttpClient, private apiservi:ApiServiceService){}

  ngOnInit(): void {
    this.apiservi.getBakcent().subscribe((res)=>{
      this.apimovie=res
      console.log(this.apimovie);
      
    })
  }
  


}
