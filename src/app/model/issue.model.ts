import { Tag } from '@app/model/tag.model';

export class Issue {
  id: number;
  fechaIni: Date;
  fechaFin: Date;
  tags: Tag[];
  nombreIssue: string;
  dificultad: number;
  storyPoints: number;
  diasEstimados: number;
  prioridad: string;


  constructor(id: number,
              fechaIni: Date,
              fechaFin: Date,
              tags: Tag[],
              nombreIssue: string,
              dificultad: number,
              storyPoints: number,
              diasEstimados: number,
              prioridad: string) {
    this.id = id;
    this.fechaIni = fechaIni;
    this.fechaFin = fechaFin;
    this.tags = tags;
    this.nombreIssue = nombreIssue;
    this.dificultad = dificultad;
    this.storyPoints = storyPoints;
    this.diasEstimados = diasEstimados;
    this.prioridad = prioridad;
  }
}
