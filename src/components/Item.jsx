import React from "react";

function Item({item, deleteItem, editItem}){
    return(
        // Campo de tabla que muestra los items ingresados y le da un botton con funciones de editar y eliminar 
        <li>
            {item.value}
            <button onClick={()=>editItem(item)}>Editar</button>
            <button onClick={()=>deleteItem(item.id)}>Eliminar</button>
        </li>
    );
}

export default Item;