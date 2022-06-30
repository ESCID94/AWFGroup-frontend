import { Component, OnInit } from '@angular/core';
import { FarmService } from 'src/app/domain/service/farm-service/farm-service.service';
import { Farm } from '../farm';

@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm-list.component.css']
})
export class FarmListComponent implements OnInit {

  farms: Farm[];
  farm: Farm;
  
  constructor(private farmService: FarmService) { }

  ngOnInit() {
    this.farmService.findAll().subscribe(data => {
      this.farms = data;
    })
  }

  delete(farm: Farm){
    this.farmService.delete(farm).subscribe(data =>
       console.log(data), error => console.log(error));
    window.location.reload();
  }

  edit(farm: Farm){
    this.farmService.edit(farm).subscribe(data => {
      this.farm = data;
    })
  }

}
