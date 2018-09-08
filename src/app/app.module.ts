import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule   } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import {LOCAL_STORAGE, WebStorageService, StorageServiceModule} from 'angular-webstorage-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { DisplayCartComponent } from './display-cart/display-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    AddItemFormComponent,
    DisplayCartComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:'welcome', component:WelcomeComponent},
      {path:'products', component:ProductListComponent},
      {path:'products/:id',component:ProductDetailComponent},
      {path:'additem',component:AddItemFormComponent},
      {path:'cart',component:DisplayCartComponent},
      {path:'**',component:WelcomeComponent}
     
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    StorageServiceModule,  
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      maxOpened: 3,
    }),
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
