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
  
    constructor(private buyerService: BuyerService) { }
  
    ngOnInit() {
      this.buyerService.findAll().subscribe(data => {
        this.buyers=data;
      })
    }
  

}
