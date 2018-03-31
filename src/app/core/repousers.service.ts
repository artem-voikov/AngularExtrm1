import { tap } from "rxjs/operators/tap";
import { ApiService } from "./api.service";
import { LocalstorageService } from "./localstorage.service";
import { Injectable } from "@angular/core";
import { User } from "../models/user";

@Injectable()
export class RepousersService {
  private readonly userTokenKey = "usertoke";

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

  signin(user: User): boolean {
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
    return true;
  }
}
