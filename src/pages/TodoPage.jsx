import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import TodoStats from '../components/TodoStats';
import ExportButton from '../components/ExportButton';
import '../styles/todo-page.css';

export default function TodoPage() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now() }]);
  };

  return (
    <div className="todo-page">
      <div className="controls">
        <TodoForm addTodo={addTodo} />
        <ExportButton todos={todos} />
      </div>

      <TodoStats todos={todos} />
      
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
