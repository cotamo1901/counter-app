import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";



describe("Pruebas 07-deses", () => {
  test("DEbe retornar un string y un numero", () => {
    const [letter,numbers] = retornaArreglo();

    expect(letter).toBe('AB')
    expect(numbers).toBe(123)
  });
});
