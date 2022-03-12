import { Component, OnInit } from '@angular/core'
import { Game } from '../../game.model'

import {MatDatepicker} from '@angular/material/datepicker';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-game-crud',
  templateUrl: './game-crud.component.html',
  styleUrls: ['./game-crud.component.css']
})
export class GameCrudComponent implements OnInit {
  game: Game = {
    name: '',
    release_year: '',
    description: '',
    gameImages: [],
    gameType: []
  }
  constructor () {}

  ngOnInit (): void {}
  date = new FormControl(moment());
}
