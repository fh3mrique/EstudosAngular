import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUserResponse } from "../interfaces/user-response.interface";
import { UsersListResponse } from "../types/users-list-responde.type";

@Injectable({
    providedIn: "root"
})
export class UserService{

    constructor(private readonly _http: HttpClient){

    }

    getUsers(): Observable<UsersListResponse> {
        return this._http.get<UsersListResponse>(`https://jsonplaceholder.typicode.com/users/`)
    }

    getUserById(userId: number ): Observable<IUserResponse>{
        return this._http.get<IUserResponse>(`https://jsonplaceholder.typicode.com/users/${userId}`);
    }
}