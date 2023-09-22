import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadderComponent } from './components/headder/headder.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SeatArrangeComponent } from './components/seat-arrange/seat-arrange.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  {
    path:"",
    component:HeadderComponent
  },{
    path:"moviedetail",
    component:MovieDetailsComponent
  },{
    path:"seatarrange",
    component:SeatArrangeComponent
  },{
    path:"payment",
    component:PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
