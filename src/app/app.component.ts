import { Component, OnInit } from '@angular/core';
import { CheckUserService } from '@app/service/general/check-user.service';
import { Rol } from '@app/model/rol.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'JiraAngular';
  test = 'hola';
  loading = true;
  user: Rol;

  constructor(
    private checkUserService: CheckUserService
  ) { }

  public ngOnInit(): void {
    //this.rol = this.checkUserService.rolData;
    this.checkUserService.checkUser().subscribe(next => {

    }, error => {
      this.loading = false;
    }, () => {
      this.user = this.checkUserService.rolData;
      this.loading = false;
    })
  }

  iAmScrumMaster(): boolean {
    if (this.user.rol == "scrum master") {
      return true;
    }
    return false;
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
