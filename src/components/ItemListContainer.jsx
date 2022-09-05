import React from "react";
import ItemCount from "./ItemCount";
import "./estilos.css";


const ItemListContainer = ( {greeting} ) => {

    const onAdd = (cantidad) => {
        console.log(`SE AGREGO ${cantidad}`);
    }

    return (
        <div className="Container">
            <h2> {greeting} </h2>

            <ItemCount stock  = {5} initial = {1} onAdd={onAdd} />

        </div>
    )
}


export default ItemListContainer;