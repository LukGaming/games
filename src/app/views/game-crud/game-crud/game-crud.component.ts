import { Component, OnInit } from '@angular/core'
import { Game } from '../../game.model'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { GameCrudService } from 'src/app/services/game-crud.service'
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
import { Observer } from 'rxjs'
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
  validateGame = new FormGroup({
    name: new FormControl(this.game.name, Validators.required),
    release_year: new FormControl(this.game.release_year, Validators.required),
    description: new FormControl(this.game.description, Validators.required),
    images: new FormControl(this.game.images, [Validators.required])
  })
  images: any = []
  year = ''
  images_to_upload: any
  constructor (private gameCrudService: GameCrudService) {}
  chosenYearHandler ($event: any, input: any) {
    let { _d } = $event
    this.year = _d
    input.opened = false
    this.game.release_year = $event._i.year
    console.log(this.game)
  }
  onFileInput ($event: any) {
    this.game.images = $event.target.files
    this.images_to_upload = $event.target.files
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
  removeImage (index: any) {
    // this.game.images.splice(index, 1)
    this.images.splice(index, 1)
  }
  submit ($event: any) {
    $event.preventDefault()
    console.log(this.validateGame.valid)
    if(this.validateGame.valid){
      var formData = new FormData()
      formData.append('name', this.game.name)
      formData.append('release_year', this.game.release_year)
      formData.append('description', this.game.description)
      formData.append('images', this.game.images[0])
      this.gameCrudService.submit(formData).subscribe(data => {
        console.log(data)
      })
    }
  }
  ngOnInit (): void {}
}
