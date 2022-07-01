import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderService } from 'src/app/domain/service/provider-service/provider-service.service';
import { Provider } from '../provider';

@Component({
  selector: 'app-provider-form',
  templateUrl: './provider-form.component.html',
  styleUrls: ['./provider-form.component.css']
})
export class ProviderFormComponent {

  provider: Provider;

  constructor(private route: ActivatedRoute, private router: Router,
    private providerService: ProviderService) {
    this.provider = new Provider();
  }

  onSubmit() {
    this.providerService.save(this.provider).subscribe(result => this.goToProviderList());
  }

  goToProviderList() {
    this.router.navigate(['/providers']);
  }

}