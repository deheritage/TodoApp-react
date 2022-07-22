

function TodoList({todos}) {

console.log('todos', todos);

  return (
    <div>
      <ul>
        {todos.map((item, index) => <li>{item.title}</li>)}
      </ul>
    </div>
  );
}

export default TodoList;
