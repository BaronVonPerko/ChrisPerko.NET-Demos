import { Component, OnInit } from '@angular/core';
import { NameService, Person } from './../../services/name.service';

@Component({
  selector: 'app-shared-singleton',
  templateUrl: './shared-singleton.component.html',
  styleUrls: ['./shared-singleton.component.sass']
})
export class SharedSingletonComponent implements OnInit {

  private person: Person;

  constructor(private nameService: NameService) { }

  ngOnInit() {
    this.person = this.nameService.person;
  }

}
