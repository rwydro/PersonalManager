import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationPanelComponent } from './authentication-panel/authentication-panel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";
import { TestComponent } from './test/test.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {HttpErrorInterceptor} from './services/exceptions/http-error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationPanelComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [  {

    provide: HTTP_INTERCEPTORS,

    useClass: HttpErrorInterceptor,

    multi: true

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
