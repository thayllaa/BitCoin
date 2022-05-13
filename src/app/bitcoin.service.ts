import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

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
  private counter: 0;

  constructor(private http: HttpClient) {}

  update() {
    this.http.get<Response>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
    .subscribe(data => {
      this.current = data;
      this.list.push(data);
    });
  }

  ngOnInit() {
    this.myTimer;
  }

  myTimer() {
    this.count = 60;
    this.countDown = Observable.timer(0, 1000).subscribe(x => {
      return this.counter;
      if (this.counter == 0) {
        this.countDown.unsubscribe();
      }
    });
  }
}