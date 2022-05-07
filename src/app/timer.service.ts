import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class TimerService {
  autoStart = true;
  private timer: any;
  private counter: 0;

  constructor() {}

  startCounter(ms:number) {
    if(!this.timer) {
      this.timer = setInterval(() => {
        this.counter++
      }, ms);
    }
  }

  resetCounter() {}

  getCounter() {
    return this.counter;
  }
}