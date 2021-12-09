describe('Pruebas en el archivo demo.test.js', () => { //recomendado para tener mejor orden


  test("Deben de ser iguales los string", () => {
    // 1.inicialización
    const mensaje = 'Hola mundo';
  
    //2. estimulo
    const mensaje2 = `Hola mundo`;
  
    // 3. Observamos el comportamiento 
    expect(mensaje) .toBe(mensaje2); // === comparan un string con otro
  
  });

});

