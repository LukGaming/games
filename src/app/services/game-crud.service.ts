import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../views/game.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GameCrudService {
  baseUrl = 'http://localhost:8000/api/games'
  constructor(private http: HttpClient) { }
  submit(game: any): Observable<any>{
    console.log(game)
    return this.http.post<any>(this.baseUrl, game);
  }
}
