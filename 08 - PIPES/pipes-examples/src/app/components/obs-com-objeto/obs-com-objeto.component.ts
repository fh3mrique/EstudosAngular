import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable, Subscription } from 'rxjs';
import { IUserResponse } from '../../interfaces/user-response.interface';

@Component({
  selector: 'app-obs-com-objeto',
  templateUrl: './obs-com-objeto.component.html',
  styleUrl: './obs-com-objeto.component.scss'
})
export class ObsComObjetoComponent implements OnInit, OnDestroy {

  userResponse: IUserResponse = {} as IUserResponse;
  userSubs: Subscription | undefined;

  user$!: Observable<IUserResponse>

  constructor(private readonly _userService: UserService){}

  ngOnInit(){
    this.user$ = this._userService.getUserById(2);


    this.userSubs = this._userService.getUserById(1).subscribe((user) =>{
      this.userResponse = user;
    });
  }

  ngOnDestroy() {
   this.userSubs && this.userSubs.unsubscribe();
  }
}
