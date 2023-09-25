

export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

const nombre ='PAblo'
console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );