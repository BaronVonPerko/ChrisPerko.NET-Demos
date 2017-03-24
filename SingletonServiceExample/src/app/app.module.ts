import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SharedSingletonComponent } from './components/shared-singleton/shared-singleton.component';
import { NotSharedComponent } from './components/not-shared/not-shared.component';

import { NameService } from './services/name.service';

@NgModule({
  declarations: [
    AppComponent,
    SharedSingletonComponent,
    NotSharedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    NameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
