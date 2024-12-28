import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SearchListComponent } from './components/search-list/search-list.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'cart', component: CartComponent },
    { path: 'product/:id', component: ProductDetailComponent },
    { path: 'search', component: SearchListComponent }
];
