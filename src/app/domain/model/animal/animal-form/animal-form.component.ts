import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from 'src/app/domain/service/animal-service/animal-service.service';
import { Animal } from '../animal';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent {

  animal: Animal;

  constructor(private route: ActivatedRoute, private router: Router,
    private animalService: AnimalService) {
      this.animal = new Animal();
     }

  onSubmit(){
    this.animalService.save(this.animal).subscribe(result => this.goToAnimalList());
  }

  goToAnimalList(){
    this.router.navigate(['/animals']);
  }
}
