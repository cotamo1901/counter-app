import {
    getHeroeById,
    getHeroesByOwner,
  } from "../../src/base-pruebas/08-imp-exp";
  import heroes from "../../src/data/heroes";
  
  describe("pruebas en 08-imp-exp", () => {
    // test("getHeroeById debe retornar un heroe por ID", () => {
    //   const id = 10000;
    //   const hero = getHeroeById(id);
    //   console.log(hero);
  
    //   // expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  
    //   expect(hero).toBeFalsy()
    // });
  
    test("getHeroesByOwner debe retornar un arreglo con los  heroes de Dc", () => {
      const owner = "DC";
      const hero = getHeroesByOwner(owner);
  
  
      expect(hero.length).toBe(3);
      expect(hero).toEqual( [
        { id: 1, name: 'Batman', owner: 'DC' },
        { id: 3, name: 'Superman', owner: 'DC' },
        { id: 4, name: 'Flash', owner: 'DC' }
      ])
  
      // expect(heroes).toEqual(heroes.filter)
      console.log(hero)
      
    });
  
    test("Debe retornar un arreglo con los heroes de Marvel", () => {
      const owner = "Marvel";
      const hero = getHeroesByOwner(owner);
  
     expect(hero.length).toBe(2);
     console.log(hero)
  
      
    });
  });