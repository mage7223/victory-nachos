import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JumboBannerComponent } from './jumbo-banner/jumbo-banner.component';
import { GoogleTagManagerModule } from 'angular-google-tag-manager';

@NgModule({
  declarations: [
    AppComponent,
    JumboBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    GoogleTagManagerModule.forRoot({
      id: environment.gtmID,
    })

  ],
  providers: [
    {provide: 'googleTagManagerId',  useValue: environment.gtmID}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
