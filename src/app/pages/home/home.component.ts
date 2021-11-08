import { Component, OnInit } from '@angular/core';
import { CoinModel } from 'src/app/shared/models/coin.model';
import { CryptoService } from 'src/app/shared/services/crypto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  messageError: string = '';
  showLoading: boolean = false;
  response: Array<CoinModel> = [];
  selectedItem: any = null;

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.getCoins();
  }

  getCoins() {
    this.cryptoService.getCoins().then(({ data, error }) => {
      this.response = data;
      this.messageError = error || '';
    })
  }

  showDetailedInfo(id: string) {
    this.showLoading = true;
    this.selectedItem = null;
    this.cryptoService.getCoinDetails(id).then(({ coin, markets, error }) => {
      error ? (this.messageError = error) : this.selectedItem = { coin, markets }
      this.showLoading = false;
    });
  }

}
