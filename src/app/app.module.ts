import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { GameCrudComponent } from './views/game-crud/game-crud/game-crud.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'

//Material Modules
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule}   from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DialogAlertComponent } from './components/dialogs/dialog-alert/dialog-alert.component';
import { MatDialogModule } from '@angular/material/dialog';
import { GamesComponent } from './views/game-crud/games/games.component'

 //.Material Modules

@NgModule({
  declarations: [AppComponent, GameCrudComponent, DialogAlertComponent, GamesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //.Material Modules
    MatFormFieldModule,
    MatSnackBarModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
    //.Material Modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
