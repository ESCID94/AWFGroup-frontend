import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/domain/service/provider-service/provider-service.service';
import { Provider } from '../provider';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {

  providers: Provider[];
  constructor(private providerService: ProviderService) { }

  ngOnInit() {
    this.providerService.findAll().subscribe(data => {
      this.providers = data;
    })
  }

}