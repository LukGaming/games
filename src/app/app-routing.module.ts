import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router' // CLI imports router
import { GameCrudComponent } from './views/games/game-crud/game-crud.component' 
import { GamesComponent } from './views/games/games/games.component' 
import { GameDetailsComponent } from './views/games/game-details/game-details.component' 
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
] 

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
