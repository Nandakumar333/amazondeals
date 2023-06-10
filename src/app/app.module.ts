import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './pages/product/product.component'
import { NgOptimizedImage } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlassPlus as fasMagGlass } from '@fortawesome/free-solid-svg-icons';
import { faStore as fasStore } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp as fasWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faTelegram as fasTelegram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook as fasFacebook } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgOptimizedImage,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(fasHeart,fasTelegram,fasWhatsapp,fasFacebook,fasMagGlass,fasStore);
  }
}
