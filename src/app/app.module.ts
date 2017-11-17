import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// application components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// application imports
import { RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { RoutingModule} from './routing-module/routing.module';
import { FormsModule } from '@angular/forms';

// application providers
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SamplesComponent } from './samples/samples.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SamplesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Angular2FontawesomeModule,
    RoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
