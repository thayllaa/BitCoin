import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

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
export class BitcoinService implements OnInit {
  current: Response;
  list: Array<Response> = [];

  sub: Subscription;
  countDown;
  count;

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
      this.count = this.count - 1;
    });

  this.sub = Observable.interval(500).subscribe(x => {
    console.log(this.count);
    if (this.count === 0) {
      this.countDown.unsubscribe();
    }
  });
  }
}