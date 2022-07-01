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
  isShown: boolean = false ;

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

  save(provider: Provider){
    this.providerService.save(provider).subscribe(data =>
      console.log(data), error => console.log(error));

    window.location.reload();
  }

  toggleShow() {

    this.isShown = ! this.isShown;
  
    }

}