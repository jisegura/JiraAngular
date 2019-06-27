import { Component, OnInit } from '@angular/core';
import { CheckUserService } from '@app/service/general/check-user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'JiraAngular';
  test = 'hola';
  loading = true;

  constructor(
    private checkUserService: CheckUserService
  ) { }

  public ngOnInit(): void {
    this.checkUserService.checkUser().subscribe(next => {

    }, error => {
      this.loading = false;
    }, () => {
      this.loading = false;
    })
  }

  public testFn(): void {
    this.checkUserService.checkUser().subscribe(next => {

    }, error => {
      this.test = 'error';
    }, () => {
      this.test = 'finalizo';
    })
  }
}
