import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuanlyphieuComponent } from './quanlyphieu/quanlyphieu.component';
import { ListComponent } from './quanlyphieu/list/list.component';
import { SearchComponent } from './quanlyphieu/search/search.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {Ng2OrderModule} from "ng2-order-pipe";
import {NgxPaginationModule} from "ngx-pagination";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { SearchUserComponent } from './user/search-user/search-user.component';
import { TestPopupComponent } from './test-popup/test-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    QuanlyphieuComponent,
    ListComponent,

    UserComponent,
    UserListComponent,
    SearchUserComponent,
    SearchComponent,
    TestPopupComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
