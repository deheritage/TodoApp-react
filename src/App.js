import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    let id = "";
if(todos.length > 0) {
  id = todos[0].id + 1
}


const todo = {id: id, text: text, completed: false}
const newTodos = [todo, ...todos]
console.log(newTodos);
setTodos(newTodos)  
};

const deleteTodo = (id) => {
let updatedTodos = [...todos].filter((todo) => todo.id !==id)
setTodos(updatedTodos)
}

const completeTodo = (id) => {
let updatedTodos = todos.map((todo) => {
  if (id === todo.id) {
    todo.completed = !todo.completed
  }
  return todo
})
setTodos(updatedTodos)
}

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => {
        return (
          <TodoList deleteTodo={deleteTodo} completeTodo={completeTodo} todo={todo} key={todo.id} />
        )
      })}
    </div>
  );
}

export default App;
