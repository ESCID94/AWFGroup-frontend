import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './domain/about/about.component';
import { AnimalListComponent } from './domain/model/animal/animal-list/animal-list.component';
import { AnimalFormComponent } from './domain/model/animal/animal-form/animal-form.component';
import { BuyerListComponent } from './domain/model/buyer/buyer-list/buyer-list.component';
import { BuyerFormComponent } from './domain/model/buyer/buyer-form/buyer-form.component';
import { ContactListComponent } from './domain/model/contact/contact-list/contact-list.component';
import { ContactFormComponent } from './domain/model/contact/contact-form/contact-form.component';
import { EmployeeListComponent } from './domain/model/employee/employee-list/employee-list.component';
import { EmployeeFormComponent } from './domain/model/employee/employee-form/employee-form.component';
import { FarmListComponent } from './domain/model/farm/farm-list/farm-list.component';
import { FarmFormComponent } from './domain/model/farm/farm-form/farm-form.component';
import { ProductListComponent } from './domain/model/product/product-list/product-list.component';
import { ProductFormComponent } from './domain/model/product/product-form/product-form.component';
import { ProviderListComponent } from './domain/model/provider/provider-list/provider-list.component';
import { ProviderFormComponent } from './domain/model/provider/provider-form/provider-form.component';
import { SaleListComponent } from './domain/model/sale/sale-list/sale-list.component';
import { SaleFormComponent } from './domain/model/sale/sale-form/sale-form.component';
import { SectorListComponent } from './domain/model/sector/sector-list/sector-list.component';
import { SectorFormComponent } from './domain/model/sector/sector-form/sector-form.component';

const routes: Routes = [
  { path: 'animals', component: AnimalListComponent },
  { path: 'addAnimal', component: AnimalFormComponent },
  { path: 'buyers', component: BuyerListComponent },
  { path: 'addBuyer', component: BuyerFormComponent }, 
  { path: 'contacts', component: ContactListComponent },
  { path: 'addContact', component: ContactFormComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'addEmployee', component: EmployeeFormComponent },
  { path: 'farms', component: FarmListComponent },
  { path: 'addFarm', component: FarmFormComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'addProduct', component: ProductFormComponent },
  { path: 'providers', component: ProviderListComponent },
  { path: 'addProvider', component: ProviderFormComponent },
  { path: 'sales', component: SaleListComponent },
  { path: 'addSale', component: SaleFormComponent },
  { path: 'sectors', component: SectorListComponent },
  { path: 'addSector', component: SectorFormComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
