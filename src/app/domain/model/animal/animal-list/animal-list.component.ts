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
  animal: Animal;
  isShown: boolean = false ;

  constructor(public animalService: AnimalService) { }

  
  ngOnInit() {
    this.animalService.findAll().subscribe(data => {
      this.animals = data;
    })
  }

  delete(animal: Animal){
    this.animalService.delete(animal).subscribe(data =>
       console.log(data), error => console.log(error));
    window.location.reload();
  }

  save(animal: Animal){
    this.animalService.save(animal).subscribe(data =>
      console.log(data), error => console.log(error));

    window.location.reload();
  }

  toggleShow() {

  this.isShown = ! this.isShown;

  }
}



