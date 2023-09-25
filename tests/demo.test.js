

describe('DemoComponent', () => { 
    
    test('Esta prueba no debe de fallr', () => {
        
        const messsage =  'Hola Mundo'
    
        const messsage2 = messsage.trim()
    
        expect(messsage).toBe(messsage2)
    })
    


 })