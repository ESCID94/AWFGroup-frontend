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
  provider: Provider;
  constructor(private providerService: ProviderService) { }

  ngOnInit() {
    this.providerService.findAll().subscribe(data => {
      this.providers = data;
    })
  }

  delete(provider: Provider){
    this.providerService.delete(provider).subscribe(data =>
       console.log(data), error => console.log(error));
    window.location.reload();
  }

  edit(provider: Provider){
    this.providerService.edit(provider).subscribe(data => {
      this.provider = data;
    })
  }

}