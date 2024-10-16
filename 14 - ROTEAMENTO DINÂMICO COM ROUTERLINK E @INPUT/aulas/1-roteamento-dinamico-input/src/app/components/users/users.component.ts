import { Component, inject, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser, UsersSevice } from '../../services/users.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [AsyncPipe, RouterLink, RouterOutlet],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  usersList$: Observable<IUser[]> = of([]);

  private readonly _userService = inject(UsersSevice);

  ngOnInit(){
    this.usersList$ = this._userService.getUsers();
  }
}
