import React, { useState } from "react";
import DOList from "./toDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function gone() {
    console.log("Gone!");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, i) => (
            //<li>{todoItem}</li>
            <DOList key={i} id={i} texto={todoItem} onChecked={gone} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
