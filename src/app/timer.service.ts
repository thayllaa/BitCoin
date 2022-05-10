import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class TimerService {
  autoStart = true;
  private timer: any;
  private counter: 0;

  constructor() {}

  startTimer(ms:number) {
    return this.autoStart;
  }

  getCounter() {
    return this.counter;
  }
}