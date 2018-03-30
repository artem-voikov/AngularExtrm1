import { LocalstorageService } from "./localstorage.service";
import { User } from "./../models/user";
import { Injectable } from "@angular/core";

@Injectable()
export class RepousersService {
  private users: User[] = [];
  private usersKey = "signuppedusers";

  constructor(private localstorageService: LocalstorageService) {
    this.users = this.localstorageService.GetItem(this.usersKey);
  }

  userExist(username: string, pwd: string): boolean {
    return (
      this.users.find(x => x.username === username && x.pwd === pwd) === null
    );
  }

  signup(user: User): boolean {
    if (!this.userExist(user.username, user.pwd)) {
      return false;
    }

    this.users.push(user);
    this.flush();

    return true;
  }

  signin(username: string, pwd: string): boolean {

  }

  singout(): boolean {}

  private flush() {
    this.localstorageService.SetItem(this.usersKey, this.users);
  }
}
