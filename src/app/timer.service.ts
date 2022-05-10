import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class TimerService {
  private timer: any;
  private counter: any;

  constructor() {}

  startTimer(ms:number) {
    if (!this.timer) {
      this.counter = 0;
      this.timer = setInterval(() => {
        this.counter++;
      }, ms);
      if (this.counter == 60) {
        this.update();
      }
    }
  }

  update() {
    this.http.get<Response>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
    .subscribe(data => {
      this.current = data;
      this.list.push(data);
    });
  }

  getCounter() {
    return this.counter;
  }
}