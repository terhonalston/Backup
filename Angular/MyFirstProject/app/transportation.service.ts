import { Injectable } from '@angular/core';
import { Car } from './cars';

@Injectable({
  providedIn: 'root'
})
export class TransportationService {
  subaru: Car = {make: 'Subaru', model: 'Outback', miles: 58232};
  ford: Car = {make: 'Ford', model: 'Focus', miles:21239};
  honda: Car = {make: 'Honda', model: 'Civic', miles: 121703};
  
  cars:Car[] = [this.subaru, this.ford, this.honda];
  
  constructor() { }

  addCar(car: Car) {
    this.cars.push(car);
  }

  getCars() {
    return this.cars;
  }

  removeCar() {
    this.cars.pop();
  }
}
