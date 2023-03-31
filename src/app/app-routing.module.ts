import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { BrandsComponent } from './brands/brands.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductdetailesComponent } from './productdetailes/productdetailes.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', canActivate:[AuthGuard] ,component:HomeComponent},
  {path:'about',canActivate:[AuthGuard] ,component:AboutComponent},
  {path:'categories',canActivate:[AuthGuard] ,component:CategoriesComponent},
  {path:'cart',canActivate:[AuthGuard] ,component:CartComponent},
  {path:'productdetailes/:id',canActivate:[AuthGuard] ,component:ProductdetailesComponent},
  {path:'brands',canActivate:[AuthGuard] ,component:BrandsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
