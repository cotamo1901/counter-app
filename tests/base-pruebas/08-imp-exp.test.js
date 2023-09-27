import { getHeroeById } from "../../src/base-pruebas/08-imp-exp";

describe("pruebas en 08-imp-exp", () => {
  test("getHeroeById debe retornar un heroe por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);
    console.log(hero);
  });
});
