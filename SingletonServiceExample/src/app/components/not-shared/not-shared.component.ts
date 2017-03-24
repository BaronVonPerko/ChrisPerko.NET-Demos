import { Component, OnInit } from '@angular/core';
import { NameService, Person } from './../../services/name.service';


@Component({
  selector: 'app-not-shared',
  templateUrl: './not-shared.component.html',
  providers: [NameService],
  styleUrls: ['./not-shared.component.sass']
})
export class NotSharedComponent implements OnInit {

  private person: Person;

  constructor(private nameService: NameService) { }

  ngOnInit() {
    this.person = this.nameService.person;
  }

}
