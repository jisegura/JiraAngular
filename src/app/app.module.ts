import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './service/http-interceptors/index';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { JiraScrummasterComponent } from './component/jira-scrummaster/jira-scrummaster.component';
import { JiraDeveloperComponent } from './component/jira-developer/jira-developer.component';


@NgModule({
  declarations: [
    AppComponent,
    JiraScrummasterComponent,
    JiraDeveloperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
