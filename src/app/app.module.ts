import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { CreateComponent } from './components/create/create.component';
import { DetailsComponent } from './components/details/details.component';

import { ModelsComponent } from './components/models/models.component';
import { ServiceDepartamentos } from '../services/service.departamentos';
import { EditComponent } from './components/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ModelsComponent,
    CreateComponent,
    DetailsComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient(), ServiceDepartamentos],
  bootstrap: [AppComponent]
})
export class AppModule { }
