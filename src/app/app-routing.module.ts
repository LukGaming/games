import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router' // CLI imports router
import { GameCrudComponent } from './views/game-crud/game-crud/game-crud.component'
import { GamesComponent } from './views/game-crud/games/games.component'
import { GameDetailsComponent } from './views/game-details/game-details.component'
const routes: Routes = [
  {
    path: 'games/create',
    component: GameCrudComponent
  },
  {
    path: 'games/:id/edit',
    component: GameCrudComponent
  },
  {
    path: 'games',
    component: GamesComponent
  },
  {
    path: 'games/:id',
    component: GameDetailsComponent
  }
] // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
