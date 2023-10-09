





import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas con 11-async-await', () => {

    test(' getImagenmagen debe de retornar un URL de la imagen', async() => {

        const url = await  getImagen()
        console.log(url)

        expect(typeof url).toBe('string')

     })
 })