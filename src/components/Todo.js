import React, {useState} from 'react'
// import TodoForm from './TodoForm'
import TodoList from './TodoList'

function Todo() {
const [todos, setTodos] = useState([
    {
        title: "Grab some Pizza",
        completed: true
    },
    {
        title: "Do your workout",
        completed: true
    },
    {
        title: "Hangout with friends",
        completed: false
    }
])

const addTodo = title => {
    const newTodos = [todos, {title, completed: false}];
    setTodos(newTodos);
    console.log(newTodos);
    
}

  return (
    <div>
      <h1>What's the plan for Today</h1>
      {/* <TodoForm  addTodo={addTodo} /> */}
      <TodoList todos={todos} addTodo={addTodo} />
    </div>
  )
}

export default Todo;
