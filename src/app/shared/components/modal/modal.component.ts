import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  coin: any;
  @Input() data: any = {};
  @Output() closeModal = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.coin = this.data.coin && this.data.coin.length ? this.data.coin[0] : {};
    console.log(this.data);
    
  }

  close() {
    this.closeModal.emit();
  }

}
