import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { GameCrudComponent } from './views/game-crud/game-crud/game-crud.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
//Material Modules
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule }   from '@angular/forms';
//.Material Modules


@NgModule({
  declarations: [AppComponent, GameCrudComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //.Material Modules
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule
    //.Material Modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
