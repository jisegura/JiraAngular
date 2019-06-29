export class Usuario {
  id: string;
  name: string;
  lastName: string;
  rol: string;

  constructor(id: string, name: string, lastName: string, rol: string) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.rol = rol;
  }
}
