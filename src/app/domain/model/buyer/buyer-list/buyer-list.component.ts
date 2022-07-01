import { Component, OnInit } from '@angular/core';
import { Buyer } from '../buyer';
import { BuyerService } from 'src/app/domain/service/buyer-service/buyer-service.service';

@Component({
  selector: 'app-buyer-list',
  templateUrl: './buyer-list.component.html',
  styleUrls: ['./buyer-list.component.css']
})
export class BuyerListComponent implements OnInit {

  buyers: Buyer[];
  buyer: Buyer;
  isShown: boolean = false;

  constructor(private buyerService: BuyerService) { }

  ngOnInit() {
    this.buyerService.findAll().subscribe(data => {
      this.buyers = data;
    })
  }

  delete(buyer: Buyer) {
    this.buyerService.delete(buyer).subscribe(data =>
      console.log(data), error => console.log(error));
    window.location.reload();
  }

  save(buyer: Buyer) {
    this.buyerService.save(buyer).subscribe(data =>
      console.log(data), error => console.log(error));

    window.location.reload();
  }

  toggleShow() {

    this.isShown = !this.isShown;

  }
}
