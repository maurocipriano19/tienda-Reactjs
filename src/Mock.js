const productos = [
    {id:0,
    nombre:`piercing septum`,
    img:'',
    color:`blanco`,
    detalle:`Piercing de uso para nariz`,
    precio: 25000 },

    {id:1,
    nombre:`piercing septum`,
    img:'',
    color:`blanco`,
    detalle:`Piercing de uso para nariz`,
    precio: 25000 },

    {id:2,
    nombre:`piercing septum`,
    img:'',
    color:`blanco`,
    detalle:`Piercing de uso para nariz`,
    precio: 25000 },
    
    {id:3,
    nombre:`piercing septum`,
    img:'',
    color:`blanco`,
    detalle:`Piercing de uso para nariz`,
    precio: 25000 },

]

export const getFetch = new Promise ((respuesta, rejected) => {

    let url = 'www.productos.com.ar'

    if (url === 'www.productos.com.ar') {
        //simulo el retardo
        setTimeout(() => {

            respuesta(productos);
            //milisegundos de retardo
        },2000);
        
    } else {
        rejected('400 not found')
    }
})