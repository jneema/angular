import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './products/products.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogueComponent } from './dialogue/dialogue/dialogue.component';
import { ReactiveFormsModule } from '@angular/forms'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MakeSaleComponent } from './dialogue/make-sale/make-sale.component';
import {MatSelectModule} from '@angular/material/select';
import { SalesComponent } from './sales/sales.component';
import { EditComponent } from './dialogue/edit/edit.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'edit/:id', component: EditComponent},
  { path: 'Products', component: ProductsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DialogueComponent,
    MakeSaleComponent,
    SalesComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
