import { Component, OnInit } from '@angular/core';
import { Buyer } from '../buyer';
import { BuyerService } from 'src/app/domain/service/buyer-service/buyer-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buyer-form',
  templateUrl: './buyer-form.component.html',
  styleUrls: ['./buyer-form.component.css']
})
export class BuyerFormComponent {

  buyer: Buyer;

  constructor(private route: ActivatedRoute, private router: Router,
    private buyerService: BuyerService) {
      this.buyer = new Buyer();
     }

  onSubmit(){
    this.buyerService.save(this.buyer).subscribe(result => this.goToBuyerList());
  }

  goToBuyerList(){
    this.router.navigate(['/buyers']);
  }

}
