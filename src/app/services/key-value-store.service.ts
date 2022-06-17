import { Injectable } from '@angular/core';
import { isNil } from '../helpers/utils';

@Injectable({
  providedIn: 'root'
})
export class KeyValueStoreService {

  constructor() { }

  set<T>(key: string, value: T, storage: typeof localStorage | typeof sessionStorage = localStorage): void {
    storage.setItem(key, JSON.stringify(value));
  }

  get(key: string, storage: typeof localStorage | typeof sessionStorage = localStorage): any {
    const value = storage.getItem(key)
    if (isNil(value))
      return null
    return JSON.parse(value)
  }

  clear(storage: typeof localStorage | typeof sessionStorage = localStorage): void {
    storage.clear()
  }

  delete(key: string, storage: typeof localStorage | typeof sessionStorage = localStorage): void {
    storage.removeItem(key)
  }
}
