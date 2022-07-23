import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { BiCheckCircle } from "react-icons/bi";
function TodoList(props) {
  const { todo, deleteTodo, completeTodo } = props
  return (
    <div className={todo.completed ? "todo-row completed" : "todo-row" }>
      {props.todo.text}
      <div className="iconsContainer">
        <RiCloseCircleLine
          className="icon" style={{marginRight: 5}}
          onClick={ () => deleteTodo(todo.id)}
        />
<BiCheckCircle onClick={() => completeTodo(todo.id)}  />
      </div>
    </div>
  );
}

export default TodoList;
