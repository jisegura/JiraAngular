export class Usuario {
  id: number;
  idAtlassian: number;
  name: string;
  lastName: string;
  rol: string;

  constructor(id: number, idAtlassian: number, name: string, lastName: string, rol: string) {
    this.id = id;
    this.idAtlassian = idAtlassian;
    this.name = name;
    this.lastName = lastName;
    this.rol = rol;
  }
}
