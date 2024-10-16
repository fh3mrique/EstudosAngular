import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-comments',
  standalone: true,
  imports: [],
  templateUrl: './post-comments.component.html',
  styleUrl: './post-comments.component.scss'
})
export class PostCommentsComponent implements OnInit {
  @Input() set postId(value: string) {
    console.log('postId', value)
  }

  //Não funciona para rotas pai
  /* @Input() set userId (value: string){
    console.log('userId', value)
  } */

  private readonly _activateRoute = inject(ActivatedRoute);

  ngOnInit() {
    this._activateRoute.parent?.params.subscribe(value => {
      console.log('userId', value);
    })
  }

}
