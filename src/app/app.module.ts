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

const routes: Routes = [
  { 
    path: 'Navbar',
    component: NavbarComponent
  },
  {
    path: 'Main-Content',
    component: MainContentComponent
  },
  {
    path: 'home',
    // component: HomeComponent
 }, 
 {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
 }, 
 {
    path: 'login',
    // component: LoginComponent
 }, 
 {  
    path: 'products',
    // component: ProductListComponent
 },
 {
    path: 'products/:id',
    // component: ProductDetailComponent
 },
  {
    path: '**',
    // component: PageNotFoundComponent
 }
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
