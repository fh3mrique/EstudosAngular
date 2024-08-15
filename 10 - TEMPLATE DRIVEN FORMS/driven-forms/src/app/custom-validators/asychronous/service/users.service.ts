import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly _httpClient: HttpClient) {}

  getUsers(): Observable<{nama: string}>{
    return this._httpClient.get<{nama: string}>('https://jsonplaceholder.typicode.com/users');
  }
}
