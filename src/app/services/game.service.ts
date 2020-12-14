import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {api} from '../../environments/environment';
import {Game} from "../models/game.model";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  /**
   * Get all book's categories as reference data from Backend server.
   */


  newGame(): Observable<Game> {
    return this.http.get<Game>(api.url + 'tictactoe/newGame');
  }

  play(cell): Observable<Game>{
    return this.http.post<Game>(api.url + 'tictactoe/play', cell);
  }

}
