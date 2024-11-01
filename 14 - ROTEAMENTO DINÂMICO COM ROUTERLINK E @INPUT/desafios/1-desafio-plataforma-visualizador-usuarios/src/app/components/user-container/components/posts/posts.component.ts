import { Component, inject, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PostListResponse } from '../../../../types/posts-list-response';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostListService } from '../../../../services/posts-list.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {

  postsList$: Observable<PostListResponse> = of([]);

  private readonly _activatedRouter = inject(ActivatedRoute);
  private readonly _postsService = inject(PostListService);

  ngOnInit() {
    this._activatedRouter.parent?.params.subscribe(
      (params) => this.postsList$ = this._postsService.getUserPost(params['userId'])
    )

  }

}
