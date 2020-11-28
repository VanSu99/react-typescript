import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodo } from './AddTodo';
import { Todo, ToggleTodo, AddTodoType } from './types';

const initialTodos: Array<Todo> = [
  { text: "Thức dậy 5.30 AM", complete: true },
  { text: "Vệ sinh cá nhân", complete: false },
  { text: "Tập thể dục", complete: false },
  { text: "Ăn sáng", complete: false },
  { text: "Check mail", complete: false },
  { text: "Đi làm", complete: false },
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete }
      }
      return todo;
    })
    setTodos(newTodos);
  }

  const addTodo: AddTodoType = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }])
  }

  return (
    <div className="App">
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodo addTodo={addTodo} />
    </div>
  );
}

export default App;
