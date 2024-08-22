import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IUser } from "../user.interface";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class UsersService{

    constructor(private readonly _httpClient: HttpClient ){}

    getUsers (): Observable<IUser[]>{
        return this._httpClient.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
    }
}