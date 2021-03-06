import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/*
Lists and Forms
*/

import { AnimalListComponent } from './domain/model/animal/animal-list/animal-list.component';
import { AnimalFormComponent } from './domain/model/animal/animal-form/animal-form.component';
import { BuyerFormComponent } from './domain/model/buyer/buyer-form/buyer-form.component';
import { BuyerListComponent } from './domain/model/buyer/buyer-list/buyer-list.component';
import { ContactListComponent } from './domain/model/contact/contact-list/contact-list.component';
import { ContactFormComponent } from './domain/model/contact/contact-form/contact-form.component';
import { EmployeeListComponent } from './domain/model/employee/employee-list/employee-list.component';
import { EmployeeFormComponent } from './domain/model/employee/employee-form/employee-form.component';
import { FarmFormComponent } from './domain/model/farm/farm-form/farm-form.component';
import { FarmListComponent } from './domain/model/farm/farm-list/farm-list.component';
import { ProductListComponent } from './domain/model/product/product-list/product-list.component';
import { ProductFormComponent } from './domain/model/product/product-form/product-form.component';
import { ProviderFormComponent } from './domain/model/provider/provider-form/provider-form.component';
import { ProviderListComponent } from './domain/model/provider/provider-list/provider-list.component';
import { SaleListComponent } from './domain/model/sale/sale-list/sale-list.component';
import { SaleFormComponent } from './domain/model/sale/sale-form/sale-form.component';
import { SectorFormComponent } from './domain/model/sector/sector-form/sector-form.component';
import { SectorListComponent } from './domain/model/sector/sector-list/sector-list.component';
import {APP_BASE_HREF} from '@angular/common';
import { AboutComponent } from './domain/about/about.component';
import { LoginComponent } from './domain/login/login.component';
/*
Services
*/
import { AnimalService } from './domain/service/animal-service/animal-service.service';
import { BuyerService } from './domain/service/buyer-service/buyer-service.service';
import { ContactService } from './domain/service/contact-service/contact-service.service';
import { EmployeeService } from './domain/service/employee-service/employee-service.service';
import { FarmService } from './domain/service/farm-service/farm-service.service';
import { ProductService } from './domain/service/product-service/product-service.service';
import { ProviderService } from './domain/service/provider-service/provider-service.service';
import { SaleService } from './domain/service/sale-service/sale-service.service';
import { SectorService } from './domain/service/sector-service/sector-service.service';
import { LoginService } from './domain/service/login.service';


@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent,
    AnimalFormComponent,
    BuyerFormComponent,
    BuyerListComponent,
    ContactListComponent,
    ContactFormComponent,
    EmployeeListComponent,
    EmployeeFormComponent,
    FarmFormComponent,
    FarmListComponent,
    ProductListComponent,
    ProductFormComponent,
    ProviderFormComponent,
    ProviderListComponent,
    SaleListComponent,
    SaleFormComponent,
    SectorFormComponent,
    SectorListComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/AWF-app/v1/'},
              AnimalService,
              BuyerService,
              ContactService,
              EmployeeService,
              FarmService,
              ProductService,
              ProviderService,
              SaleService,
              SectorService,
              LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
