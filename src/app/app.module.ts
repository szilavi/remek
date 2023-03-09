import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './page/home/home.component';
import { StoreComponent } from './page/store/store.component';
import { AboutusComponent } from './page/aboutus/aboutus.component';
import { LoginComponent } from './page/login/login.component';
import { TableComponent } from './common/table/table.component';
import { SymbolPipe } from './pipe/symbol.pipe';
import { MoreInfoComponent } from './page/more-info/more-info.component';
import { BuyNowComponent } from './page/buy-now/buy-now.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StoreComponent,
    AboutusComponent,
    LoginComponent,
    TableComponent,
    SymbolPipe,
    MoreInfoComponent,
    BuyNowComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
