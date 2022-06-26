import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/domain/model/animal/animal';
import { AnimalService } from 'src/app/domain/service/animal-service/animal-service.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  animals: Animal[];

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.animalService.findAll().subscribe(data => {
      this.animals=data;
    })
  }

}
