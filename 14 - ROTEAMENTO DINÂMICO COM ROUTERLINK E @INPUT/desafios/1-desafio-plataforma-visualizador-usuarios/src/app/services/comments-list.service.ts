import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PostListResponse } from "../types/posts-list-response";

@Injectable({
    providedIn: 'root'
})
export class PostListService {
    private readonly _http = inject(HttpClient);

    getPostsComments(postId: string): Observable<PostListResponse> {
        return this._http.get<PostListResponse>('https://jsonplaceholder.typicode.com/posts?postId=' + postId);
    }

}
