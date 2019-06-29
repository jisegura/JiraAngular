import { Tag } from '@app/model/tag.model';

export class Issue {
  id: number;
  idAtlassian: number;
  fechaIni: string;
  fechaFin: string;
  tags: Tag[];
  nombreIssue: string;
  dificultad: number;
  storyPoints: number;
  diasEstimados: number;
  prioridad: string;


  constructor(id: number,
              idAtlassian: number,
              fechaIni: string,
              fechaFin: string,
              tags: Tag[],
              nombreIssue: string,
              dificultad: number,
              storyPoints: number,
              diasEstimados: number,
              prioridad: string) {
    this.id = id;
    this.idAtlassian = idAtlassian;
    this.fechaIni = fechaIni;
    this.fechaFin = fechaFin;
    this.tags = tags;
    this.nombreIssue = nombreIssue;
    this.dificultad = dificultad;
    this.diasEstimados = diasEstimados;
    this.prioridad = prioridad;
  }
}
