import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor() {};
  
  getProducts(): Product[] {
    return [   {
      name: 'ส้มโอ',
      price: 990
      },
      {
      name: 'แตงโม', 
      price: 1000
      },
      {
      name: 'มะพร้าวน้ําหอม',
      price: 500
      },
      {
      name: 'มะม่วง',
      price: 800
      }];
  }

  };
