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
  constructor(private sectorService: SectorService) { }

  ngOnInit() {
    this.sectorService.findAll().subscribe(data => {
      this.sectors = data;
    })
  }

}