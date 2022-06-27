import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './domain/about/about.component';
import { AnimalListComponent } from './domain/model/animal/animal-list/animal-list.component';
import { AnimalFormComponent } from './domain/model/animal/animal-form/animal-form.component';
import { BuyerListComponent } from './domain/model/buyer/buyer-list/buyer-list.component';
import { ContactListComponent } from './domain/model/contact/contact-list/contact-list.component';
import { EmployeeListComponent } from './domain/model/employee/employee-list/employee-list.component';
import { FarmListComponent } from './domain/model/farm/farm-list/farm-list.component';
import { ProductListComponent } from './domain/model/product/product-list/product-list.component';
import { ProviderListComponent } from './domain/model/provider/provider-list/provider-list.component';
import { SaleListComponent } from './domain/model/sale/sale-list/sale-list.component';
import { SectorListComponent } from './domain/model/sector/sector-list/sector-list.component';

const routes: Routes = [
  { path: 'animals', component: AnimalListComponent },
  { path: 'addAnimal', component: AnimalFormComponent },
  { path: 'buyers', component: BuyerListComponent },
  { path: 'contacts', component: ContactListComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'farms', component: FarmListComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'providers', component: ProviderListComponent },
  { path: 'sales', component: SaleListComponent },
  { path: 'sectors', component: SectorListComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
