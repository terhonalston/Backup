import { Component } from '@angular/core';
import { Car } from './cars';
import { TransportationService } from './transportation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cars: Car[];
  make!: string;
  model!: string;
  miles!: number;
  
  constructor (private transportationService: TransportationService) {
    this.cars = this.transportationService.getCars();
  }

  addCar(){
    const newCar: Car = {make: this.make, model: this.model, miles:this.miles};
    this.transportationService.addCar(newCar);
  }
}
