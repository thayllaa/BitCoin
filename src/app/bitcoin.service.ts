import { HttpClient } from '@angular/common/http';
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
  current: Response;
  list: Array<Response> = [];

  private timer: any;
  private counter: any;

  constructor(private http: HttpClient) {}

  update() {
    this.http.get<Response>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
    .subscribe(data => {
      this.current = data;
      this.list.push(data);
    });
  }

  startTimer(ms:number) {
    if (!this.timer) {
      this.counter = 0;
      this.timer = setInterval(() => {
        this.counter++;
      }, ms);
      if (this.counter > 61) {
        this.timer = clearInterval();
        this.update();
      }
    }
  }

  getCounter() {
    return this.counter;
  }
}