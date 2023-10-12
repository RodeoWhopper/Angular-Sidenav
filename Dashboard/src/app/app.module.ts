import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CoupensComponent } from './coupens/coupens.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { RouterModule, RouterLink } from "@angular/router";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    ProductsComponent,
    StatisticsComponent,
    CoupensComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,

  ],
    imports: [
        BrowserModule,
        RouterLink,
        BrowserAnimationsModule,
        AppRoutingModule/*Instead of importing RouterModule to app.module.ts, we should create an AppRoutingModule and
         import it*/
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
