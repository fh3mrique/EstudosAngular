import { Component, inject, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPost } from '../../../../interfaces/post.interface';
import { PostListService } from '../../../../services/posts-list.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

  post$: Observable<IPost> = of({} as IPost);

  private readonly _postListService = inject(PostListService);


  @Input() set postId(value: string) {
    this.post$ = this._postListService.getPost(value);
  }

}
