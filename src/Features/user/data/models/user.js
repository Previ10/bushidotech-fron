// user.js
import { Rol } from './rol';

export class User {
  constructor(
    id,
    name,
    lastname,
    email,
    dni,
    adress,
    numero,
    piso,
    provincia,
    ciudad,
    password,
    rol,
    isActive,
    products
  ) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.dni = dni;
    this.adress = adress;
    this.numero = numero;
    this.piso = piso;
    this.provincia = provincia;
    this.ciudad = ciudad;
    this.password = password;
    this.rol = rol;
    this.isActive = isActive !== undefined ? isActive : true;
    this.products = products || [];
  }
}