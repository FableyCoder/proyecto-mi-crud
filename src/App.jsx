import React, {useState, useEffect} from 'react';
import Form from './components/Forms';
import List from './components/List';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(null);

  // Obtiene valores del item localizados en localStorage y los guarda en una const para tener acceso a estos
  useEffect(()=>{
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  },[]);

  // Transforma los items de JSON en valor string
  useEffect(()=>{
    localStorage.setItem('items',JSON.stringify(items));
  },[items]);

  // Permite agregar o actualizar los items
  const addOrUpdateItem = (value)=>{
    if(itemToEdit){
      setItems(items.map(item=>item.id === itemToEdit.id ? {...item,value}:item));
    } else{
      setItems([...items,{id:Date.now(),value}]);
    }
  };

  // Permite eliminar los items 
  const deleteItem= (id)=>{
    setItems(items.filter(item=> item.id!==id));
  }

  // Permite editar los items
  const editItem = (item)=>{
    setItemToEdit(item);
  }

  return (
    // HTML con los valores de Form y List en campos funcionales
    <div className="App">
      <h1>CRUD con LocalStorage</h1>
      <Form addOrUpdateItem={addOrUpdateItem} itemToEdit={itemToEdit}/>
      <List items={items} deleteItem={deleteItem} editItem={editItem}/>
    </div>
  );
}

export default App;
