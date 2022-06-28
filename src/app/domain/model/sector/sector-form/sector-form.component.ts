import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SectorService } from 'src/app/domain/service/sector-service/sector-service.service';
import { Sector } from '../sector';

@Component({
  selector: 'app-sector-form',
  templateUrl: './sector-form.component.html',
  styleUrls: ['./sector-form.component.css']
})
export class SectorFormComponent {

  sector: Sector;

  constructor(private route: ActivatedRoute, private router: Router,
    private sectorService: SectorService) {
      this.sector = new Sector();
     }

  onSubmit(){
    this.sectorService.save(this.sector).subscribe(result => this.goToSectorList());
  }

  goToSectorList(){
    this.router.navigate(['/sectors']);
  }

}