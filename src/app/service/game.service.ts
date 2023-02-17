import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../model/game';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  apiUrl: string = 'http://localhost:8080';
  http: HttpClient = inject(HttpClient);

  constructor() {}

  getAll(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl);
  }

  get(_id: string): Observable<Game> {
    return this.http.get<Game>(`${this.apiUrl}/${_id}`);
  }

  create(game: Game): Observable<Game> {
    return this.http.post<Game>(`${this.apiUrl}`, game);
  }

  update(game: Game): Observable<Game> {
    return this.http.patch<Game>(`${this.apiUrl}/${game._id}`, game);
  }

  remove(_id: string): Observable<Game> {
    return this.http.delete<Game>(`${this.apiUrl}/${_id}`);
  }
}
