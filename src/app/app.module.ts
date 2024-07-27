import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';

import { AvailabiltyRendererComponent } from './availabilty-renderer/availabilty-renderer.component';
import { DeleteButtonRendererComponent } from './delete-button-renderer/delete-button-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    AvailabiltyRendererComponent,
    DeleteButtonRendererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
