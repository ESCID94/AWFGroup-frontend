import { Component, OnInit } from '@angular/core';
import { SaleService } from 'src/app/domain/service/sale-service/sale-service.service';
import { Sale } from '../sale';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.css']
})
export class SaleListComponent implements OnInit {

  sales: Sale[];
  constructor(private saleService: SaleService) { }

  ngOnInit() {
    this.saleService.findAll().subscribe(data => {
      this.sales = data;
    })
  }

}