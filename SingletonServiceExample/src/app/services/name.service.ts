import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export interface Person {
  name: string;
}

@Injectable()
export class NameService {

  public person: Person;

  constructor() {
    this.person = { name: 'Chris' }
  }

}
