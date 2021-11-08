import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CoinModel } from '../models/coin.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private requestHandler: HttpClient) { }

  async getCoins() {
    const response = await this.requestHandler.get<{ data: Array<CoinModel>, error: string }>(`${environment.urlAPI}/tickers/?start=0&limit=20`).toPromise()
    return response ? response : { error: 'Oops', data: [] }
  }

  async getCoinDetails(id: string) {
    const coin = await this.requestHandler.get<Array<any>>(`${environment.urlAPI}/ticker/?id=${id}`).toPromise()
    const markets = await this.requestHandler.get<Array<any>>(`${environment.urlAPI}/coin/markets/?id=${id}`).toPromise()
    return coin && markets ? { coin, markets, error: '' } : { coin: [], markets: [], error: 'data not found' }
  }

}
