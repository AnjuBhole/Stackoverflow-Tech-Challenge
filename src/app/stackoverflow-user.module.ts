import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StackoverflowUserComponent } from './stackoverflow-user.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AgGridModule} from "ag-grid-angular";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    StackoverflowUserComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AgGridModule.withComponents([]),
        NgbModule,
    ],
  providers: [],
  bootstrap: [StackoverflowUserComponent],
})
export class AppModule { }
