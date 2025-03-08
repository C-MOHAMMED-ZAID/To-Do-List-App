import { AnimatePresence } from 'framer-motion';
import TodoItem from './TodoItem';

export default function TodoList({ todos, setTodos }) {
  return (
    <ul className="todo-list">
      <AnimatePresence>
        {todos.map(todo => (
          <TodoItem 
            key={todo.id}
            todo={todo}
            setTodos={setTodos}
          />
        ))}
      </AnimatePresence>
    </ul>
  );
}
