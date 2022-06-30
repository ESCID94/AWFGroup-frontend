import { Component, OnInit } from '@angular/core';
import { SectorService } from 'src/app/domain/service/sector-service/sector-service.service';
import { Sector } from '../sector';

@Component({
  selector: 'app-sector-list',
  templateUrl: './sector-list.component.html',
  styleUrls: ['./sector-list.component.css']
})
export class SectorListComponent implements OnInit {

  sectors: Sector[];
  sector: Sector;
  constructor(private sectorService: SectorService) { }

  ngOnInit() {
    this.sectorService.findAll().subscribe(data => {
      this.sectors = data;
    })
  }

  delete(sector: Sector){
    this.sectorService.delete(sector).subscribe(data =>
       console.log(data), error => console.log(error));
    window.location.reload();
  }

  edit(sector: Sector){
    this.sectorService.edit(sector).subscribe(data => {
      this.sector = data;
    })
  }
}