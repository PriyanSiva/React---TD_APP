import React, { useState,useEffect } from 'react';

import TodoItem from './components/TodoItem/TodoItem';
import db from "./firebase";

import './App.css';
import { FormControl, InputLabel, Input, Button} from '@material-ui/core';


function App() {
  const [todos, setTodos ] = useState([]);
  const [ input, setInput ] =useState('')

  useEffect(()=> {
    db.collections('todos').onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data()))
    })
  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input])
    setInput('')
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input 
            value={input} 
            onChange={(event) => setInput(event.target.value)} 
          />
        </FormControl>
        <Button 
          type="submit" 
          disabled={!input} 
          onClick={addTodo} 
          variant="contained" 
          color="primary" 
          >
            Add ToDo
        </Button>
      </form>

      <ul>
        {todos.map(todo => (
          <TodoItem text={todo} />
        ) )}
      </ul>
    </div>
  );
}

export default App;
