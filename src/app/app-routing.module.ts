import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './componets/countries/countries.component';
import { HomeComponent } from './componets/home/home.component';

const routes: Routes = [
  {path :'', component :HomeComponent},
  {path :'countries', component :CountriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
