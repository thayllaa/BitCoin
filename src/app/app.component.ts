import { Component, VERSION } from '@angular/core';
import { BitcoinService } from './bitcoin.service';
import { GithubService } from './github.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'HttClient Application';

  constructor(
    public gitHubService: GithubService,
    public bitoinService: BitcoinService,
  ) {}

  ngOnInIt() {
    this.gitHubService.update();
  }

  updateBitcoinRates() {
    this.bitoinService.update();
  }
}
