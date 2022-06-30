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

  constructor(private buyerService: BuyerService) { }

  ngOnInit() {
    this.buyerService.findAll().subscribe(data => {
      this.buyers = data;
    })
  }

  delete(buyer: Buyer){
    this.buyerService.delete(buyer).subscribe(data =>
       console.log(data), error => console.log(error));
    window.location.reload();
  }

  edit(buyer: Buyer){
    this.buyerService.edit(buyer).subscribe(data => {
      this.buyer = data;
    })
  }
}
