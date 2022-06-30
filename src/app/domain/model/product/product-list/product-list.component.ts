import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/domain/service/product-service/product-service.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  product: Product;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.findAll().subscribe(data => {
      this.products = data;
    })
  }

  delete(product: Product){
    this.productService.delete(product).subscribe(data =>
       console.log(data), error => console.log(error));
    window.location.reload();
  }

  edit(product: Product){
    this.productService.edit(product).subscribe(data => {
      this.product = data;
    })
  }

}
