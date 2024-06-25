const {CarritoCompra} = require("../index");


describe("Pruebas sobre la clase CarritoCompra", ()=>{
 let carro;
    beforeEach (()=>{
        carro = new CarritoCompra();
    })

    it ("La clase debe contener una propiedad carrito igual a un array vacio",()=>{
  expect(carro.carrito).toEqual([]);
    });
    it ("debe contener la funcion agregarProducto que tome como argumento un producto y lo agregue al carrito",()=>{
       let producto1 = {
        producto: "split",
        precio: 3500,
        cantidad:5
       };
       
        carro.agregarProducto(producto1)

        expect(carro.carrito).toContain(producto1);
    });
    it ("debe contener la funcion calcularTotal() donde devuelve el total de productos dentro del carrito" ,()=>{
        let producto1 = {
            producto: "split",
            precio: 3500,
            cantidad:5
           };
           let producto2 = {
            producto: "audio",
            precio: 750,
            cantidad:2
           };

            carro.agregarProducto(producto1);
            carro.agregarProducto(producto2);

            expect(carro.calcularTotal()).toEqual(19000);

    });
    it ("debe contener la funcion aplicarDescuento(porcentaje) a los productos del carrito",()=>{
        carro.agregarProducto({producto:"tv",precio: 750, cantidad:1});
        carro.agregarProducto({producto:"audio",precio:450, cantidad:5});

       let porcentajeDescuento = 10;

       let descuento = carro.aplicarDescuento(porcentajeDescuento);

       let TotalDescuento = (750*1 + 450*5) - ((750*1 + 450*5) * (porcentajeDescuento/100));

      expect(descuento).toEqual(TotalDescuento);


    });
});

