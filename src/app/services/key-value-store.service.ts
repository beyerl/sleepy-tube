import { Injectable } from '@angular/core';
import { isNil } from '../helpers/utils';

@Injectable({
  providedIn: 'root'
})
export class KeyValueStoreService {

  constructor() { }

  set<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): any {
    const value = localStorage.getItem(key)
    if (isNil(value))
      return null
    return JSON.parse(value)
  }

  clear(): void {
    localStorage.clear()
  }

  delete(key: string): void {
    localStorage.removeItem(key)
  }
}
