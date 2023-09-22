import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Seat } from 'src/ModelClass/democlass';
import { MovieServiceService } from 'src/app/service/movie-service.service';

declare var Razorpay : any
@Component({
  selector: 'app-seat-arrange',
  templateUrl: './seat-arrange.component.html',
  styleUrls: ['./seat-arrange.component.scss']
})
export class SeatArrangeComponent implements OnInit{

  TcktAMT:number=180
  TcktGrandAmt = 0
  seatArr?:Seat[]
  seatArr2?:Seat[]
  seatArr3?:Seat[]
  clickedMov:any
  toggle : any
  showpay = false

  constructor(private MovService:MovieServiceService){}


  clikbtn(event:any){
    // this.toggle = "bg-gray-400"
    // event.target.style.backgroundColorcontains(="red"
    event.target.classList.toggle("mystyle");

    // this.showpay=true
    // this.TcktGrandAmt += 1*this.TcktAMT

    if(event.target.classList.contains("mystyle")){
      this.showpay=true
      this.TcktGrandAmt += 1*this.TcktAMT
    }else{
      this.showpay=true
      this.TcktGrandAmt -= 1*this.TcktAMT
    }

    // console.log(event.target.classList.contains("mystyle"))
    
    
    
    


  }
  // unbook(event:any){
  //   event.target.style.backgroundColor="white"
  // }

  ngOnInit(): void {

    this.MovService.checkeId().subscribe((res)=>{
      this.clickedMov=res
      
    })

    this.seatArr3=[
      { id : 1, seatNumber : 'A1', row :  'A', column : 1 , isBooked: false},
      { id : 2, seatNumber : 'A2', row :  'A', column : 2 , isBooked: false},
      { id : 3, seatNumber : 'A3', row :  'A', column : 3 , isBooked: false},
      { id : 4, seatNumber : 'A4', row :  'A', column : 4 , isBooked: false},
      { id : 5, seatNumber : 'A5', row :  'A', column : 5 , isBooked: false},
      { id : 6, seatNumber : 'A6', row :  'A', column : 6 , isBooked: false},

      { id : 1, seatNumber : 'A1', row :  'A', column : 1 , isBooked: false},
      { id : 2, seatNumber : 'A2', row :  'A', column : 2 , isBooked: false},
      { id : 3, seatNumber : 'A3', row :  'A', column : 3 , isBooked: false},
      { id : 4, seatNumber : 'A4', row :  'A', column : 4 , isBooked: false},
      { id : 5, seatNumber : 'A5', row :  'A', column : 5 , isBooked: false},
      { id : 6, seatNumber : 'A6', row :  'A', column : 6 , isBooked: false},

      { id : 1, seatNumber : 'A1', row :  'A', column : 1 , isBooked: false},
      { id : 2, seatNumber : 'A2', row :  'A', column : 2 , isBooked: false},
      { id : 3, seatNumber : 'A3', row :  'A', column : 3 , isBooked: false},
      { id : 4, seatNumber : 'A4', row :  'A', column : 4 , isBooked: false},
      { id : 5, seatNumber : 'A5', row :  'A', column : 5 , isBooked: false},
      { id : 6, seatNumber : 'A6', row :  'A', column : 6 , isBooked: false},

      { id : 1, seatNumber : 'A1', row :  'A', column : 1 , isBooked: false},
      { id : 2, seatNumber : 'A2', row :  'A', column : 2 , isBooked: false},
      { id : 3, seatNumber : 'A3', row :  'A', column : 3 , isBooked: false},
      { id : 4, seatNumber : 'A4', row :  'A', column : 4 , isBooked: false},
      { id : 5, seatNumber : 'A5', row :  'A', column : 5 , isBooked: false},
      { id : 6, seatNumber : 'A6', row :  'A', column : 6 , isBooked: false},

      { id : 1, seatNumber : 'A1', row :  'A', column : 1 , isBooked: false},
      { id : 2, seatNumber : 'A2', row :  'A', column : 2 , isBooked: false},
      { id : 3, seatNumber : 'A3', row :  'A', column : 3 , isBooked: false},
      { id : 4, seatNumber : 'A4', row :  'A', column : 4 , isBooked: false},
      { id : 5, seatNumber : 'A5', row :  'A', column : 5 , isBooked: false},
      { id : 6, seatNumber : 'A6', row :  'A', column : 6 , isBooked: false},

      { id : 1, seatNumber : 'A1', row :  'A', column : 1 , isBooked: false},
      { id : 2, seatNumber : 'A2', row :  'A', column : 2 , isBooked: false},
      { id : 3, seatNumber : 'A3', row :  'A', column : 3 , isBooked: false},
      { id : 4, seatNumber : 'A4', row :  'A', column : 4 , isBooked: false},
      { id : 5, seatNumber : 'A5', row :  'A', column : 5 , isBooked: false},
      { id : 6, seatNumber : 'A6', row :  'A', column : 6 , isBooked: false},
      ]

    this.seatArr=[
      { id : 1, seatNumber : 'A1', row :  'A', column : 1 , isBooked: false},
      { id : 2, seatNumber : 'A2', row :  'A', column : 2 , isBooked: false},
      { id : 3, seatNumber : 'A3', row :  'A', column : 3 , isBooked: false},
      { id : 4, seatNumber : 'A4', row :  'A', column : 4 , isBooked: false},
      { id : 5, seatNumber : 'A5', row :  'A', column : 5 , isBooked: false},
      { id : 6, seatNumber : 'A6', row :  'A', column : 6 , isBooked: false},
      { id : 7, seatNumber : 'A7', row :  'A', column : 7 , isBooked: false},
      { id : 8, seatNumber : 'A8', row :  'A', column : 8 , isBooked: false},
      { id : 9, seatNumber : 'A9', row :  'A', column : 9 , isBooked: false},
      { id : 10,seatNumber : 'A10', row : 'A', column : 10 , isBooked: false},

      { id : 11, seatNumber : 'B1', row :  'B', column : 1 , isBooked: false},
      { id : 12, seatNumber : 'B2', row :  'B', column : 2 , isBooked: false},
      { id : 13, seatNumber : 'B3', row :  'B', column : 3 , isBooked: false},
      { id : 14, seatNumber : 'B4', row :  'B', column : 4 , isBooked: false},
      { id : 15, seatNumber : 'B5', row :  'B', column : 5 , isBooked: false},
      { id : 16, seatNumber : 'B6', row :  'B', column : 6 , isBooked: false},
      { id : 17, seatNumber : 'B7', row :  'B', column : 7 , isBooked: false},
      { id : 18, seatNumber : 'B8', row :  'B', column : 8 , isBooked: false},
      { id : 19, seatNumber : 'B9', row :  'B', column : 9 , isBooked: false},
      { id : 20, seatNumber : 'B10', row :  'B', column : 10 , isBooked: false},

      { id : 10, seatNumber : 'C1', row :  'C', column : 1 , isBooked: false},
      { id : 11, seatNumber : 'C2', row :  'C', column : 2 , isBooked: false},
      { id : 12, seatNumber : 'C3', row :  'C', column : 3 , isBooked: false},
      { id : 13, seatNumber : 'C4', row :  'C', column : 4 , isBooked: false},
      { id : 14, seatNumber : 'C5', row :  'C', column : 5 , isBooked: false},
      { id : 15, seatNumber : 'C6', row :  'C', column : 6 , isBooked: false},
      { id : 16, seatNumber : 'C7', row :  'C', column : 7 , isBooked: false},
      { id : 17, seatNumber : 'C8', row :  'C', column : 8 , isBooked: false},
      { id : 18, seatNumber : 'C9', row :  'C', column : 9 , isBooked: false},
      { id : 19, seatNumber : 'C10', row :  'C', column : 10 , isBooked: false},

      { id : 11, seatNumber : 'D1', row :  'D', column : 1 , isBooked: false},
      { id : 12, seatNumber : 'D2', row :  'D', column : 2 , isBooked: false},
      { id : 13, seatNumber : 'D3', row :  'D', column : 3 , isBooked: false},
      { id : 14, seatNumber : 'D4', row :  'D', column : 4 , isBooked: false},
      { id : 15, seatNumber : 'D5', row :  'D', column : 5 , isBooked: false},
      { id : 16, seatNumber : 'D6', row :  'D', column : 6 , isBooked: false},
      { id : 17, seatNumber : 'D7', row :  'D', column : 7 , isBooked: false},
      { id : 18, seatNumber : 'D8', row :  'D', column : 8 , isBooked: false},
      { id : 19, seatNumber : 'D9', row :  'D', column : 9 , isBooked: false},
      { id : 20, seatNumber : 'D10', row :  'D', column : 10 , isBooked: false},

    

      { id : 11, seatNumber : 'E1', row :  'E', column : 1 , isBooked: false},
      { id : 12, seatNumber : 'E2', row :  'E', column : 2 , isBooked: false},
      { id : 13, seatNumber : 'E3', row :  'E', column : 3 , isBooked: false},
      { id : 14, seatNumber : 'E4', row :  'E', column : 4 , isBooked: false},
      { id : 15, seatNumber : 'E5', row :  'E', column : 5 , isBooked: false},
      { id : 16, seatNumber : 'E6', row :  'E', column : 6 , isBooked: false},
      { id : 17, seatNumber : 'E7', row :  'E', column : 7 , isBooked: false},
      { id : 18, seatNumber : 'E8', row :  'E', column : 8 , isBooked: false},
      { id : 19, seatNumber : 'E9', row :  'E', column : 9 , isBooked: false},
      { id : 20, seatNumber : 'E10', row :  'E', column : 10 , isBooked: false},

      { id : 13, seatNumber : 'F1', row :  'F', column : 1 , isBooked: false},
      { id : 14, seatNumber : 'F2', row :  'F', column : 2 , isBooked: false},
      { id : 15, seatNumber : 'F3', row :  'F', column : 3 , isBooked: false},
      { id : 16, seatNumber : 'F4', row :  'F', column : 4 , isBooked: false},
      { id : 17, seatNumber : 'F5', row :  'F', column : 5 , isBooked: false},
      { id : 18, seatNumber : 'F6', row :  'F', column : 6 , isBooked: false},
      { id : 19, seatNumber : 'F7', row :  'F', column : 7 , isBooked: false},
      { id : 20, seatNumber : 'F8', row :  'C', column : 8 , isBooked: false},
      { id : 10, seatNumber : 'F9', row :  'E', column : 9, isBooked: false},
      { id : 10, seatNumber : 'F10', row :  'D', column : 10, isBooked: false},
      ]

      this.seatArr2=[
      { id : 1, seatNumber : 'A1', row :  'A', column : 1 , isBooked: false},
      { id : 2, seatNumber : 'A2', row :  'A', column : 2 , isBooked: false},
      { id : 3, seatNumber : 'A3', row :  'A', column : 3 , isBooked: false},
      { id : 4, seatNumber : 'A4', row :  'A', column : 4 , isBooked: false},
      { id : 5, seatNumber : 'A5', row :  'A', column : 5 , isBooked: false},
      { id : 6, seatNumber : 'A6', row :  'A', column : 6 , isBooked: false},

      { id : 1, seatNumber : 'A1', row :  'A', column : 1 , isBooked: false},
      { id : 2, seatNumber : 'A2', row :  'A', column : 2 , isBooked: false},
      { id : 3, seatNumber : 'A3', row :  'A', column : 3 , isBooked: false},
      { id : 4, seatNumber : 'A4', row :  'A', column : 4 , isBooked: false},
      { id : 5, seatNumber : 'A5', row :  'A', column : 5 , isBooked: false},
      { id : 6, seatNumber : 'A6', row :  'A', column : 6 , isBooked: false},

      { id : 1, seatNumber : 'A1', row :  'A', column : 1 , isBooked: false},
      { id : 2, seatNumber : 'A2', row :  'A', column : 2 , isBooked: false},
      { id : 3, seatNumber : 'A3', row :  'A', column : 3 , isBooked: false},
      { id : 4, seatNumber : 'A4', row :  'A', column : 4 , isBooked: false},
      { id : 5, seatNumber : 'A5', row :  'A', column : 5 , isBooked: false},
      { id : 6, seatNumber : 'A6', row :  'A', column : 6 , isBooked: false},

      { id : 1, seatNumber : 'A1', row :  'A', column : 1 , isBooked: false},
      { id : 2, seatNumber : 'A2', row :  'A', column : 2 , isBooked: false},
      { id : 3, seatNumber : 'A3', row :  'A', column : 3 , isBooked: false},
      { id : 4, seatNumber : 'A4', row :  'A', column : 4 , isBooked: false},
      { id : 5, seatNumber : 'A5', row :  'A', column : 5 , isBooked: false},
      { id : 6, seatNumber : 'A6', row :  'A', column : 6 , isBooked: false},

      { id : 1, seatNumber : 'A1', row :  'A', column : 1 , isBooked: false},
      { id : 2, seatNumber : 'A2', row :  'A', column : 2 , isBooked: false},
      { id : 3, seatNumber : 'A3', row :  'A', column : 3 , isBooked: false},
      { id : 4, seatNumber : 'A4', row :  'A', column : 4 , isBooked: false},
      { id : 5, seatNumber : 'A5', row :  'A', column : 5 , isBooked: false},
      { id : 6, seatNumber : 'A6', row :  'A', column : 6 , isBooked: false},

      { id : 1, seatNumber : 'A1', row :  'A', column : 1 , isBooked: false},
      { id : 2, seatNumber : 'A2', row :  'A', column : 2 , isBooked: false},
      { id : 3, seatNumber : 'A3', row :  'A', column : 3 , isBooked: false},
      { id : 4, seatNumber : 'A4', row :  'A', column : 4 , isBooked: false},
      { id : 5, seatNumber : 'A5', row :  'A', column : 5 , isBooked: false},
      { id : 6, seatNumber : 'A6', row :  'A', column : 6 , isBooked: false},
      ]
  }



  paynow(){
    const RazorpayOption = {
      description : 'Sample RozarPay  demo',
      Currency : 'INR',
      amount : this.TcktGrandAmt+'00',
      name :'Rahman',
      key : 'rzp_test_7eLWI4olPErZyi',
      prefill : {
        name:'ramees',
        email:'rhmnramees581@gmail.com',
        phone: '9207667362'
      },
      theme:{
        color: 'blue'
      },
      model:{
        ondimiss:()=>{
          console.log('Dissmissed');
        }
      }
    }

    const successCallback = (paymnetid: any)=>{
      console.log(paymnetid);
      
    }
    const failureCallback = (e: any)=>{
      console.log(e);
    } 
    Razorpay.open(RazorpayOption,successCallback,failureCallback)
  }



  // private seats: Seat[] = [
  //   { id: 1, seatNumber: 'A1', row: 1, column: 1, isBooked: false },
  //   { id: 2, seatNumber: 'A2', row: 1, column: 2, isBooked: false },
    
  // ];

  // getSeats(): Seat[] {
  //   return this.seats;
  // }

  // bookSeat(id: number): void {
  //   const seat = this.seats.find(s => s.id === id);
  //   if (seat) {
  //     seat.isBooked = !seat.isBooked;
  //   }
  // }
  

  
}
