import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CoinModel } from '../../models/coin.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() data: CoinModel = ({} as CoinModel);

  @Output() click = new EventEmitter();

  isGrowing: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isGrowing =  parseFloat(this.data.percent_change_24h.toString()) >= 0
  }

  goToCoinDetails = () =>  this.click.emit(this.data.id);
}
