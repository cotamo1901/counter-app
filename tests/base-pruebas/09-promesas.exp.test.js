import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Pruebas en 09-promesas", () => {
  test("getHeroeByIdAsync debe obtner un error si heroe no existe ", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then(hero => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });

      done();
    });
  });
});
