import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPost } from "../interfaces/post.interface";
import { PostListResponse } from "../types/posts-list-response";

@Injectable({
    providedIn: 'root'
})
export class PostListService {
    private readonly _http = inject(HttpClient);

    getUserPost(userId: string): Observable<PostListResponse> {
        return this._http.get<PostListResponse>('https://jsonplaceholder.typicode.com/posts?userId=' + userId);
    }
    getPost(postId: string): Observable<IPost> {
        return this._http.get<IPost>('https://jsonplaceholder.typicode.com/posts/' + postId);
    }
}



