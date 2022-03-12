import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router' // CLI imports router
import { GameCrudComponent } from './views/game-crud/game-crud/game-crud.component'
const routes: Routes = [
  {
    path: 'games/create',
    component: GameCrudComponent
  },
 
] // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
