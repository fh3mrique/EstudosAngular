import { Component, inject, Input, OnInit } from '@angular/core';
import { IPost, PostsService } from '../../services/posts.service';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {
  postList$: Observable<IPost[]> = of([]);

  //@Input() userId: string = ''
  @Input() set userId(value: string) {
    console.log(value);
    this.postList$ = this._postsService.getUserPosts(value);
  }

  private readonly _postsService = inject(PostsService);

  ngOnInit(): void {
    console.log(this.userId)
    //this.postList$  = this._postsService.getUserPosts(this.userId);
  }
}
