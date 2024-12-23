import { Component, inject, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UsersListResponse } from '../../types/users-list-response';
import { UsersListService } from '../../services/users-list.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit {
  usersList$: Observable<UsersListResponse> = of();

  private readonly _usersListService = inject(UsersListService);

  ngOnInit(): void {
    this.usersList$ = this._usersListService.getUsers();
  }

}
