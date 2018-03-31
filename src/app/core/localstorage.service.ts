import { Injectable } from "@angular/core";

@Injectable()
export class LocalstorageService {
  constructor() {}

  SetItem(key: string, value: any) {
    window.localStorage[key] = JSON.stringify(value);
  }

  GetItem<T>(key: string): T {
    return window.localStorage[key] == null
      ? []
      : JSON.parse(window.localStorage[key]);
  }
}
