import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { GameCrudService } from 'src/app/services/game-crud.service'
import { Game } from '../game.model'
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
  providers: [NgbCarouselConfig]
})
export class GameDetailsComponent implements OnInit {
  id?: number
  game: any
  images: any =  []
  constructor (
    private route: ActivatedRoute,
    private gameService: GameCrudService,
    config: NgbCarouselConfig
  ) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    this.images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  }

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
