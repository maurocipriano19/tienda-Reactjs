import React from "react";
import "./estilos.css";
import { useEffect } from "react";
import { getFetch } from "../Mock";
import { useState } from "react";


const ItemListContainer = () => {

    const [Productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const onAdd = (cantidad) => {
        console.log(`SE AGREGO ${cantidad}`);
    }

    useEffect(() => {
        getFetch
            .then((respuesta) => setProductos(respuesta))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])




    return (
        <div>
            {
                loading
                    ?
                    <h1 className="cargando">CARGANDO...</h1>
                    :
                    <div>
                        <h1 className="titulo">CATALOGO DE PRODUCTOS</h1>
                        <div className="lista">
                            <itemList Prod={Productos} />
                        </div>
                    </div>
            }

        </div>
    )
}

export default ItemListContainer;