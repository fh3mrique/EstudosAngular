import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/users/users.interface';
import { UsersList } from './data/users-list';
import { IFilterOptios } from './interfaces/filter-optios.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  usersList: IUser[] = [];

  userSelected: IUser = {} as IUser;

  showUserDetails: boolean = false;

  usersListFiltered:  IUser[] = [];

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList;
      this.usersListFiltered = this.usersList;
    }, 1);
  }

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOptios){
    console.log(filterOptions)

    this.usersListFiltered = this.filterUsersList(filterOptions, this.usersList);
  }

  //funções para os filtros
  filterUsersList(filterOptions: IFilterOptios, usersList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];

    filteredList = this.filterUsersListByName(filterOptions.name, usersList)
    return filteredList;
  }

  filterUsersListByName(name: string | undefined, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPPED = name === undefined;

    if (NAME_NOT_TYPPED){
      return usersList;
    }

    const filteredList = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLocaleLowerCase()));

    return filteredList;
  }
}
