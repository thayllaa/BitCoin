import { Injectable } from '@angular/core';

interface Response {
  time: {
    updated: string
  }
  bpi: {
    USD: {
      symbol: string,
      rate_float: number
    };
    BRL: {
      symbol: string,
      rate_float: number
    };
  }
}

@Injectable()
export class BitcoinService {

  constructor() { }

}