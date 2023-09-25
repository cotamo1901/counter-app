import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => {

test('getSaludo debe retornar "Hola john"', () => {


    const nombre = 'John';
    const message = getSaludo(nombre)

    expect (message).toBe(`Hola ${nombre}`)
 })

 })