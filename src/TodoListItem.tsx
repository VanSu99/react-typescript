import React, { Fragment } from 'react';
import { Todo, ToggleTodo } from './types';
import './TodoListItem.css';

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {

  return (
    <Fragment>
      <li>
        <label className={todo.complete ? 'completed' : undefined}>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => toggleTodo(todo)}
          />
          {todo.text}
        </label>
      </li>
    </Fragment>
  )
}
