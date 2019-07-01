import { Component, OnInit } from '@angular/core';
import { SmService } from '@app/service/data/sm.service';
import { Observable } from 'rxjs';
import { Usuario } from '@app/model/usuario.model';
import { Sm } from '@app/model/sm.model';

@Component({
  selector: 'app-jira-scrummaster',
  templateUrl: './jira-scrummaster.component.html',
  styleUrls: ['./jira-scrummaster.component.scss']
})
export class JiraScrummasterComponent implements OnInit {

  smDatos: Observable<Sm[]>;

  constructor(
    private smService: SmService
  ) { }

  ngOnInit() {
    this.smDatos = this.smService.smDatos;
    this.smService.loadDataSm();
  }

  getNameLastname(user: Usuario): string {
    return user.name;
  }

}
