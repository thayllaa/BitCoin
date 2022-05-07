import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class TimerService implements OnInit {
  counter: 0;
  timer: any;
  minutes: number;
  seconds: number;

  constructor() {}

  ngOnInit() {}

  countDownTimer = new Timer();

  startCount(ms:number) {
    if(!this.timer) {
      this.timer = setInterval(() => {
        this.counter++;
      }, ms);
    }
  }
}