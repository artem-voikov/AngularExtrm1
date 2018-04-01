import { Observable } from "rxjs/Observable";
import { tap } from "rxjs/operators/tap";
import { ApiService } from "./api.service";
import { LocalstorageService } from "./localstorage.service";
import { Injectable } from "@angular/core";
import { User } from "../models/user";

@Injectable()
export class RepousersService {
  private readonly userTokenKey = "usertoke";
  private readonly userNameKey = "username";

  constructor(
    private localstorageService: LocalstorageService,
    private apiService: ApiService
  ) {}

  signup(user: User): boolean {
    this.apiService
      .post<User>("users", { user })
      .pipe(tap(x => this.setAuth(x)));

    return true;
  }

  signin(user: User) {
    this.apiService
      .post<User>("users/login", { user })
      .pipe(tap(x => this.setAuth(x)));

    return true;
  }

  singout(): boolean {
    localStorage.removeItem(this.userTokenKey);
    return true;
  }

  setAuth(user: User) {
    localStorage.setItem(this.userTokenKey, user.token);
    localStorage.setItem(this.userNameKey, user.username);
    return true;
  }

  signedindata() {
    if (!this.localstorageService.GetItem(this.userTokenKey)) {
      return null;
    }

    return {
      username: this.localstorageService.GetItem<string>(this.userNameKey),
      token: this.localstorageService.GetItem<string>(this.userTokenKey)
    };
  }

  signedin(): boolean {
    return this.signedindata !== null;
  }
}
