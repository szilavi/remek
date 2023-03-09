import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './page/aboutus/aboutus.component';
import { BuyNowComponent } from './page/buy-now/buy-now.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { MoreInfoComponent } from './page/more-info/more-info.component';
import { StoreComponent } from './page/store/store.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
  },
  {
    path: 'store',
    component: StoreComponent,
  },
  {
    path: 'store/more-info/:id',
    component: MoreInfoComponent,
  },
  {
    path: 'store/buy-now/:id',
    component: BuyNowComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
