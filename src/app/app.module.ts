import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Services

import { AddService } from './services/add-service';
import { EditService } from './services/edit-service';
import { DeleteService } from './services/delete-service';
import { ConcludeService } from './services/conclude-service';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AddService, EditService, DeleteService, ConcludeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
