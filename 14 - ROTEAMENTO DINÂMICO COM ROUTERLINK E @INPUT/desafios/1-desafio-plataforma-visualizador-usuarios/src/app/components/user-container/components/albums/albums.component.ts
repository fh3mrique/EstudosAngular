import { Component, inject, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AlbumsListResponse } from '../../../../types/albums-list-response';
import { ActivatedRoute } from '@angular/router';
import { AmbumsListService } from '../../../../services/albums-list.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.scss'
})
export class AlbumsComponent implements OnInit {
 
  albumsList$: Observable<AlbumsListResponse> = of([]);

  private readonly _activatedRouter = inject(ActivatedRoute);
  private readonly _albumsService = inject(AmbumsListService);

  ngOnInit() {
    this._activatedRouter.parent?.params.subscribe(
      (params) => this.albumsList$ = this._albumsService.getUsersAlbums(params['userId'])
    )

  }

}
