import React, { ChangeEvent, FormEvent, useState } from 'react';
import { AddTodoType } from './types';

interface AddTodoProps {
  addTodo: AddTodoType;
}

export const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {

  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Nhập công việc cần làm"
        value={newTodo}
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>Thêm</button>
    </form>
  )
}
