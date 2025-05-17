import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductListsComponent } from './components/product-lists/product-lists.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`

  { path: "account/login", component: LoginComponent },
  { path: "account/register", component: RegisterComponent },
  { path: "account", component: ProfileComponent },
  { path: "home", component: HomeComponent },
  { path: "products", component: ProductListsComponent },
  { path: "cart", component: CartComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
