import { Component, OnInit } from '@angular/core';
import { DevService } from '@app/service/data/dev.service';

@Component({
  selector: 'app-jira-developer',
  templateUrl: './jira-developer.component.html',
  styleUrls: ['./jira-developer.component.scss']
})
export class JiraDeveloperComponent implements OnInit {

  constructor(
    private devService: DevService
  ) { }

  ngOnInit() {
    this.devService.loadDataDev();
  }

}
