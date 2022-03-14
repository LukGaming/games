import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Game } from '../views/game.model'
import { Observable } from 'rxjs'
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class GameCrudService {
  baseUrl = 'http://localhost:8000/api/games'
  constructor (private http: HttpClient, private snackbar: MatSnackBar) {}
  post (game: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/create`, game)
  }
  patch (game: any): Observable<any> {
    return this.http.patch<any>(this.baseUrl, game)
  }
  getById (id: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`)
  }
  snackBarMessage (msg: string = 'Teste', classMsg: string = 'success') {
    this.snackbar.open(msg, 'fechar', {
      duration: 3000,
      panelClass: classMsg
    })
  }
  removeImageAlreadyUploaded (id: any): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/remove-image/${id}`)
  }
}
