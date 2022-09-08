import React from "react";
import './estilos.css';
const Item = ({prod}) => {
    return (
        <div className='card'>
        <div className='title'>
            <h2 className='nombreProd'>{prod.nombre}</h2>
        </div>
        <div>
            <img src={prod.img} alt={prod.nombre} className='imgProd' />
        </div>
        <div className='containerDescrip'>
            <p className='descriProd'>{prod.description}</p>
            <p className='precioProd'>$ {prod.precio}</p>

            <button className='buttonProd'> ver descripcion </button>
                       
            </div>    
        </div>             
            
   )
}

export default Item