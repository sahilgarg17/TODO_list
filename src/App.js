import React, { useState } from 'react';
import TodoLists from './TodoLists';

const App = () => {

  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);
  const itemEvent = (event) => {
    console.log(event.target.value);
    const value = event.target.value;
    setItem(value);
 };
  const showList = () => {
    setItems((oldItems) => {
      return [...oldItems, item]
    });
    setItem('');
  };
  const deleteItem = (id) => {
    //console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((val, idx) => {
          return id !== idx;
        });
    });
};

  return(
     <div className = "main_div"> 
       <div className = "center__div">
         <br />
         <h1> TODO List </h1>
         <br />
         <input type = "text" 
           placeholder = "Add an item"
           onChange = {itemEvent}
           value = {item}
         />
         <button onClick = {showList}> + </button>
         <ol>
           {
             items.map((val, index) => {
               return (<TodoLists 
                      key = {index}
                      id = {index}
                      text = {val}
                      onSelect = {deleteItem}
                       />
               );
             })
           }
         </ol>
       </div>
     </div>
  )
};
export default App;