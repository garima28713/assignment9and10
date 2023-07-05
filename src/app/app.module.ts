import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { MatchPasswordDirective } from './directives/match-password.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [BrowserModule, CommonModule,ReactiveFormsModule,FormsModule],
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    MatchPasswordDirective,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
