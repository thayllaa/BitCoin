import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class TimerService {
  private timer: any;
  private counter: 0;

  constructor() {}

  startTimer(ms:number) {
    if (!this.timer) {
      this.counter = 0;
      this.timer = setInterval(() => {
        this.counter++;
      }, ms);
    }
  }

  getCounter() {
    return this.counter;
  }
}