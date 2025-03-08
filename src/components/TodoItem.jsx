import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiEdit, FiTrash, FiCheck, FiClock, FiFlag } from 'react-icons/fi';
import DueDatePicker from './DueDatePicker';
import PrioritySelector from './PrioritySelector';

export default function TodoItem({ todo, setTodos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [showDatePicker, setShowDatePicker] = useState(false);
  
  const handlePriorityChange = (priority) => {
    setTodos(prev => prev.map(item => 
      item.id === todo.id ? { ...item, priority } : item
    ));
  };

  return (
    <motion.li
      className={`todo-item priority-${todo.priority}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="content">
        <input 
          type="checkbox"
          checked={todo.completed}
          onChange={() => setTodos(prev => prev.map(item => 
            item.id === todo.id ? { ...item, completed: !item.completed } : item
          ))}
        />
        
        <div className="text-content">
          {isEditing ? (
            <input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={() => {
                setTodos(prev => prev.map(item => 
                  item.id === todo.id ? { ...item, text: editText } : item
                ));
                setIsEditing(false);
              }}
              autoFocus
            />
          ) : (
            <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
          )}
          
          <div className="meta">
            {todo.dueDate && (
              <span className="due-date">
                <FiClock /> {new Date(todo.dueDate).toLocaleDateString()}
              </span>
            )}
            <PrioritySelector 
              priority={todo.priority} 
              onChange={handlePriorityChange}
            />
          </div>
        </div>
      </div>

      <div className="actions">
        <button onClick={() => setShowDatePicker(!showDatePicker)}>
          <FiClock />
        </button>
        <button onClick={() => setIsEditing(!isEditing)}>
          <FiEdit />
        </button>
        <button 
          onClick={() => setTodos(prev => prev.filter(item => item.id !== todo.id))}
          className="delete"
        >
          <FiTrash />
        </button>
      </div>

      {showDatePicker && (
        <DueDatePicker
          selectedDate={todo.dueDate}
          onSelect={(date) => {
            setTodos(prev => prev.map(item => 
              item.id === todo.id ? { ...item, dueDate: date } : item
            ));
            setShowDatePicker(false);
          }}
        />
      )}
    </motion.li>
  );
}
