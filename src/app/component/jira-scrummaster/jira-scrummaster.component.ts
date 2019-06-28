import { Component, OnInit } from '@angular/core';
import { SmService } from '@app/service/data/sm.service';

@Component({
  selector: 'app-jira-scrummaster',
  templateUrl: './jira-scrummaster.component.html',
  styleUrls: ['./jira-scrummaster.component.scss']
})
export class JiraScrummasterComponent implements OnInit {

  constructor(
    private smService: SmService
  ) { }

  ngOnInit() {
    this.smService.loadDataSm();
  }

}
