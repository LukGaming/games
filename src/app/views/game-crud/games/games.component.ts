import { Component, OnInit } from '@angular/core';
import { GameCrudService } from 'src/app/services/game-crud.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(private gameCrudService: GameCrudService) { }
  games: any;
  ngOnInit(): void {
    this.gameCrudService.getAll(100).subscribe(games =>{
      this.games = games.data
      console.log(this.games)
    })
  }

}
