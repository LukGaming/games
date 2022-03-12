import { Component, OnInit } from '@angular/core'
import { Game } from '../../game.model'
import { FormControl } from '@angular/forms'
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS
} from '@angular/material-moment-adapter'
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from '@angular/material/core'
import { MatDatepicker } from '@angular/material/datepicker'
import * as _moment from 'moment'
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment, Moment } from 'moment'
const moment = _rollupMoment || _moment
export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY'
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'YYYY',
    monthYearA11yLabel: 'YYYY'
  }
}
@Component({
  selector: 'app-game-crud',
  templateUrl: './game-crud.component.html',
  styleUrls: ['./game-crud.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class GameCrudComponent implements OnInit {
  date = new FormControl(moment())
  game: Game = {
    name: '',
    release_year: '',
    description: '',
    images: [],
    gameType: []
  }
  images: any
  year = ''
  constructor () {}
  chosenYearHandler ($event: any, input: any) {
    let { _d } = $event
    this.year = _d
    input.opened = false
    this.game.release_year = $event._i.year
    console.log(this.game)
  }
  onFileInput ($event: any) {
    this.game.images = $event.target.files
    var images: any = []
    for (let i = 0; i < $event.target.files.length; i++) {
      let reader = new FileReader()
      reader.onloadend = function () {
        images.push(reader.result)
      }
      reader.readAsDataURL($event.target.files[i])
    }
    this.images = images
  }
  removeImage(event: any){
    console.log(event)
  }

  ngOnInit (): void {}
}
