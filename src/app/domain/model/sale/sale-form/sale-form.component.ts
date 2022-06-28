import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SaleService } from 'src/app/domain/service/sale-service/sale-service.service';
import { Sale } from '../sale';

@Component({
  selector: 'app-sale-form',
  templateUrl: './sale-form.component.html',
  styleUrls: ['./sale-form.component.css']
})
export class SaleFormComponent {

  sale: Sale;

  constructor(private route: ActivatedRoute, private router: Router,
    private saleService: SaleService) {
      this.sale = new Sale();
     }

  onSubmit(){
    this.saleService.save(this.sale).subscribe(result => this.goToSaleList());
  }

  goToSaleList(){
    this.router.navigate(['/sales']);
  }

}