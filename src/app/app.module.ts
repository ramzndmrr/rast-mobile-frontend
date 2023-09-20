import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DxDataGridModule, DxPopupModule,DxSelectBoxModule } from 'devextreme-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DatagridComponent } from './datagrid/datagrid.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DatagridComponent
  ],
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxButtonModule,
    DxPopupModule,
    FormsModule,
    ReactiveFormsModule,
    DxSelectBoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
