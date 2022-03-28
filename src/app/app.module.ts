import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'

//Components//
//Bootstrap Components
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel'
//.Bootstrap Components

import { NavComponent } from './components/template/nav/nav.component'
import { HeaderComponent } from './components/template/header/header.component'
import { DialogAlertComponent } from './components/dialogs/dialog-alert/dialog-alert.component'
import { AppComponent } from './app.component'
import { GameCrudService } from './services/game-crud.service'
import { GameCrudComponent } from './views/games/game-crud/game-crud.component'
import { GameDetailsComponent } from './views/games/game-details/game-details.component'
import { GamesComponent } from './views/games/games/games.component'
//.Components//
//Angular Material Modules
import { FormsModule } from '@angular/forms'

import { ReactiveFormsModule } from '@angular/forms'
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatDialogModule } from '@angular/material/dialog'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatNativeDateModule } from '@angular/material/core'

//Angular Material Modules

@NgModule({
  declarations: [
    AppComponent,
    DialogAlertComponent,
    HeaderComponent,
    NavComponent,
    GameCrudComponent,
    GameDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MdbCarouselModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
