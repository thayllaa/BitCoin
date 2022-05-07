import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GithubService } from './github.service';
import { HttpClientModule } from '@angular/common/http';
import { BitcoinService } from './bitcoin.service';
import { TimerService } from './timer.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GithubService, BitcoinService, TimerService]
})
export class AppModule { }
