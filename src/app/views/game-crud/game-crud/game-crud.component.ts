import { Component, OnInit } from '@angular/core'
import { Game } from '../../game.model'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { GameCrudService } from 'src/app/services/game-crud.service'
import { MatDialog } from '@angular/material/dialog'

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
import { ActivatedRoute, Router } from '@angular/router'
import { HttpEvent, HttpEventType } from '@angular/common/http'
import { DialogAlertComponent } from 'src/app/components/dialogs/dialog-alert/dialog-alert.component'

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
  constructor (
    public dialog: MatDialog,
    private gameCrudService: GameCrudService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  progress: number = 0
  method: string = ''
  create: boolean = false
  edit: boolean = false
  isSubmiting: boolean = false
  date = new FormControl(moment())
  game: Game = {
    id: null,
    name: 'Teste',
    release_year: '2020',
    description: 'Descricao tal',
    images: [],
    gameType: []
  }
  validateGame = new FormGroup({
    name: new FormControl(this.game.name, Validators.required),
    release_year: new FormControl(this.game.release_year, Validators.required),
    description: new FormControl(this.game.description, Validators.required),
    images: new FormControl(this.game.images, [Validators.required])
  })
  imagesAlreadyUploaded: any = []
  images: any = []
  year = '2020'
  images_to_upload: any

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
    if (this.validateGame.valid) {
      var formData = new FormData()
      formData.append('name', this.game.name)
      formData.append('release_year', this.game.release_year)
      formData.append('description', this.game.description)
      for (let i = 0; i < this.game.images.length; i++) {
        formData.append('images[]', this.game.images[i])
      }
      if (this.create) {
        this.isSubmiting = true
        this.gameCrudService
          .post(formData)
          .subscribe((event: HttpEvent<Object>) => {
            this.isSubmiting = true
            if (event.type == HttpEventType.Response) {
              // this.gameCrudService.snackBarMessage(
              //   'Jogo Criado com sucesso',
              //   'success'
              // )
              this.dialog.open(DialogAlertComponent, {
                width: '500px',
                data: {title: 'Sucesso!', message: 'Game criado com sucesso!'}
              })
            } else if (event.type == HttpEventType.UploadProgress) {
              this.progress = Math.round(
                (event.loaded! * 100) / event['total']!
              )
            }

            this.resetForm()
          })
      } else {
        this.gameCrudService.patch(formData).subscribe(data => {
          // this.gameCrudService.snackBarMessage(
          //   'Jogo Editado com sucesso',
          //   'success'
          // )
          this.dialog.open(DialogAlertComponent, {
            width: '500px',
            data: {title: 'Sucesso!', message: 'Game editado com sucesso!'}
          })
        })
      }
    }
  }
  resetForm () {
    this.game.images = []
    this.game.name = ''
    this.game.release_year = ''
    this.game.description = ''
    this.images = []
    this.images_to_upload = []
    this.validateGame.reset()
  }
  editGame () {
    this.gameCrudService.getById(this.game.id).subscribe(data => {
      this.year = data.game.release_year
      this.game = { ...data.game }
      for (let i = 0; i < data.game.game_images.length; i++) {
        data.game.game_images[
          i
        ].caminho_imagem_game = `http://localhost:8000/${data.game.game_images[i].caminho_imagem_game}`
      }
      this.imagesAlreadyUploaded = [...data.game.game_images]
    })
  }
  removeImageAlreadyUploaded (id: any, index: any) {
    this.imagesAlreadyUploaded.splice(index, 1)
    this.gameCrudService.removeImageAlreadyUploaded(id).subscribe(data => {
      this.gameCrudService.snackBarMessage(
        'Imagem removida com sucesso',
        'success'
      )
    })
  }
  ngOnInit (): void {
    if (this.router.url == '/games/create') {
      this.create = true
      this.method = 'Criar Game'
    }
    if (this.router.url == `/games/${this.route.snapshot.params['id']}/edit`) {
      this.game.id = this.route.snapshot.params['id']
      this.edit = true
      this.editGame()
      this.method = 'Salvar Alterações'
    }
  }
}
