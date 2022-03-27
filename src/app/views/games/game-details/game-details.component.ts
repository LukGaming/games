import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { GameCrudService } from 'src/app/services/game-crud.service'
import { Game } from '../game.model'

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  id?: number
  game: any
  images: any = []
  constructor (
    private route: ActivatedRoute,
    private gameService: GameCrudService
  ) {}
  ngOnInit (): void {
    this.id = this.route.snapshot.params['id']
    this.gameService.getById(this.id).subscribe(
      res => {
        this.game = res.game
        console.log(this.game)
      },
      error => {
        console.log(error)
      }
    )
  }
}
