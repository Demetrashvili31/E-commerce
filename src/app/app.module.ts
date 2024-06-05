import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';

import { ProductsService } from './services/products.service';
import { Route, RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { FilteringprodsComponent } from './filteringprods/filteringprods.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { InformationComponent } from './information/information.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';

const routes : Routes = [
  {path:'',redirectTo:'landing', pathMatch:'full'},
  {path:'home',component : HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'cart',component:CartComponent},
  {path:'about',component:AboutComponent},
  {path:'register', component:RegisterComponent},
  {path:'info/:id',component:InformationComponent},
  {path:'landing',component:LandingComponent},
  {path:'**',component:LandingComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,

    FilteringprodsComponent,
    LoginComponent,
    CartComponent,
    
    FilteringprodsComponent,
         AboutComponent,
         RegisterComponent,
         InformationComponent,
         LandingComponent,
         FooterComponent,
         
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
