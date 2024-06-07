export function parseFecha(fechaAParsear) {
    const fechaNacimiento = new Date(fechaAParsear);
  
    const año = fechaNacimiento.getUTCFullYear();
    const mes = fechaNacimiento.getUTCMonth() + 1;
    const dia = fechaNacimiento.getUTCDate();
    return `${año}/${mes.toString().padStart(2, "0")}/${dia
      .toString()
      .padStart(2, "0")}`;
  }


  export function parseFechaParaFrom(fechaAParsear) {
    const fechaNacimiento = new Date(fechaAParsear);
  
    const año = fechaNacimiento.getUTCFullYear();
    const mes = fechaNacimiento.getUTCMonth() + 1;
    const dia = fechaNacimiento.getUTCDate();
    return `${año}-${mes.toString().padStart(2, "0")}-${dia.toString().padStart(2, "0")}`;
  }