import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import AppComponent from './app.component';
import {NAME} from './app.component';
import { MyNestedComponent } from './my-nested/my-nested.component';
import { MyPropertyBindingComponent } from './my-property-binding/my-property-binding.component';
import { MyEventBindingComponent } from './my-event-binding/my-event-binding.component';
import { MyMixedBindingComponent } from './my-mixed-binding/my-mixed-binding.component';
import { MyTwoWayBindingComponent } from './my-two-way-binding/my-two-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNestedComponent,
    MyPropertyBindingComponent,
    MyEventBindingComponent,
    MyMixedBindingComponent,
    MyTwoWayBindingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule // <-- This is what adds ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }