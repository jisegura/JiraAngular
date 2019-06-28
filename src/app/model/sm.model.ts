import { Issue } from '@app/model/issue.model';
import { Usuario } from '@app/model/usuario.model';

export class Sm {
  issueResponse: Issue;
  usuarioResponse: Usuario;


  constructor(issueResponse: Issue, usuarioResponse: Usuario) {
    this.issueResponse = issueResponse;
    this.usuarioResponse = usuarioResponse;
  }
}
