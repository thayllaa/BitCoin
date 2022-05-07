import { Injectable, OnInit } from '@angular/core';

interface Time{
  minutes: number,
  seconds: number
}

@Injectable()
export class TimerService implements OnInit {

  constructor() {}

  ngOnInit() {}

  countDownTimer = new Timer();

}