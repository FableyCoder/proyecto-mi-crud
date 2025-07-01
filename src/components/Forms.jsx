import React, {useState, useEffect} from 'react';

function Form({addOrUpdateItem,itemToEdit}){
    const[inputValue,setInputValue] = useState('');

    // Cambia el valor del inputValue al ser editado
    useEffect(()=>{
        if(itemToEdit){
            setInputValue(itemToEdit.value);
        } else{
            setInputValue('');
        }
    },[itemToEdit]);

    // Se encarga de enviar el inputValue
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim()){
            addOrUpdateItem(inputValue);
            setInputValue('');
        }
    };
    return(
        // Campo input para ingresar valores que cambia segun su funcion
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>setInputValue(e.target.value)}/>
            <button type="submit">{itemToEdit ? 'Actualizar' : 'Agregar'}</button>
        </form>
        // Observacion: El botton no regresa a su estado original despues de actualizar un item
    );
}

export default Form;