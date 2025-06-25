import React, {useState, useEffect} from 'react';

function Form({addOrUpdateItem,itemToEdit}){
    const[inputValue,setInputValue] = useState('');

    useEffect(()=>{
        if(itemToEdit){
            setInputValue(itemToEdit.value);
        } else{
            setInputValue('');
        }
    },[itemToEdit]);
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim()){
            addOrUpdateItem(inputValue);
            setInputValue('');
        }
    };
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>setInputValue(e.target.value)}/>
            <button type="submit">{itemToEdit ? 'Actualizar' : 'Agregar'}</button>
        </form>
    );
}

export default Form;