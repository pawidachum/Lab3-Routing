import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutesRecognized } from '@angular/router';

import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { CatalogModule } from './catalog/catalog.module';
import { HomeModule } from './home/home.module';
import { RouterModule, Routes} from '@angular/router';
import { NavbarComponent } from './home/navbar/navbar.component';
import { MainContentComponent } from './home/main-content/main-content.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './catalog/product-detail/product-detail.component';

const routes: Routes = [
  { 
    path: 'navbar',
    component: NavbarComponent
  },
  {
    path: 'main-content',
    component: MainContentComponent
  },
  {
    path: 'product-detail',
    component: ProductDetailComponent
  }, 
  {  
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CatalogModule,
    HomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {} 
