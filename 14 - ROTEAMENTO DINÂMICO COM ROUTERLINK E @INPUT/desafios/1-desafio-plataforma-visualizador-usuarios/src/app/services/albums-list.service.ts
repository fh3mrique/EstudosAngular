import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AlbumsListResponse } from "../types/albums-list-response";

@Injectable({
    providedIn: 'root'
})
export class AmbumsListService {
    private readonly _http = inject(HttpClient);

    getUsersAlbums(userId: string): Observable<AlbumsListResponse> {
        return this._http.get<AlbumsListResponse>('https://jsonplaceholder.typicode.com/albums?userId=' + userId);
    }
}
