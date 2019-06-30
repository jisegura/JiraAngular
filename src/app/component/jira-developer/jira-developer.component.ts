import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DevService } from '@app/service/data/dev.service';
import { Issue } from '@app/model/issue.model';

@Component({
  selector: 'app-jira-developer',
  templateUrl: './jira-developer.component.html',
  styleUrls: ['./jira-developer.component.scss']
})
export class JiraDeveloperComponent implements OnInit {

  ngModelHash: Map<number,number>;
  devDatos: Observable<Issue[]>;

  constructor(
    private devService: DevService
  ) { }

  ngOnInit() {
    this.ngModelHash = new Map();

    this.devDatos = this.devService.devDatos;

    this.devDatos.subscribe(datos => datos.forEach(dato => this.ngModelHash.set(dato.id, null)));
    this.devService.loadDataDev();

    this.ngModelHash.set(123, null);
  }

  getNota(issue: Issue): string {
    return "Se estimo un tiempo de " +
           issue.diasEstimados +
           ", y se tardo " +
           //this.getDiferenceInDays(issue.fechaIni, issue.fechaFin) +
           " dias en completar esta Tarea."
  }

  getDiferenceInDays(dateIni: Date, dateFin: Date): number{
    return Math.abs(dateFin.getTime() - dateIni.getTime()) / (1000 * 60 * 60 * 24) ;
  }

  updateHasMap(id: number, value: number): void {
    console.log(id, value);
    if (value < 1) {
      this.ngModelHash.set(id, 1);
    } else if (value > 10) {
      this.ngModelHash.set(id, 10);
    } else {
      this.ngModelHash.set(id, value);
    }
  }

  sendEvaluation(id: number): void {
    console.log(id, this.ngModelHash.get(id));
    const issue: Issue = {
      id: id,
      dificultad: this.ngModelHash.get(id)
    } as Issue;

    this.devService.updateDataDev(issue);
    this.devService.updateDataDevById(id, this.ngModelHash.get(id));

    console.log(issue);
  }

}
