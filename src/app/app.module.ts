import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'

//Material Modules
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatDialogModule } from '@angular/material/dialog'
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar'

//.Material Modules
//Components//
import { NavComponent } from './components/template/nav/nav.component'
import { GamesComponent } from './views/game-crud/games/games.component'
import { HeaderComponent } from './components/template/header/header.component'
import { DialogAlertComponent } from './components/dialogs/dialog-alert/dialog-alert.component'
import { GameCrudComponent } from './views/game-crud/game-crud/game-crud.component'
import { AppComponent } from './app.component';
import { GameDetailsComponent } from './views/game-details/game-details.component'
//.Components//

@NgModule({
  declarations: [
    AppComponent,
    GameCrudComponent,
    DialogAlertComponent,
    GamesComponent,
    HeaderComponent,
    NavComponent,
    GameDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //.Material Modules
    MatSidenavModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule

    //.Material Modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
