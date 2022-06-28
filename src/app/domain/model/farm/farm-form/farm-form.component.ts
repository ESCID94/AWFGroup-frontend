import { Component, OnInit } from '@angular/core';
import { Farm } from '../farm';
import { FarmService } from 'src/app/domain/service/farm-service/farm-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-farm-form',
  templateUrl: './farm-form.component.html',
  styleUrls: ['./farm-form.component.css']
})
export class FarmFormComponent {

  farm: Farm;

  constructor(private route: ActivatedRoute, private router: Router,
    private farmService: FarmService) {
      this.farm = new Farm();
     }

  onSubmit(){
    this.farmService.save(this.farm).subscribe(result => this.goToFarmList());
  }

  goToFarmList(){
    this.router.navigate(['/farms']);
  }

}
