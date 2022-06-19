import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdministradorComponent } from './administrador/administrador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from './service/user-service.service';


@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
