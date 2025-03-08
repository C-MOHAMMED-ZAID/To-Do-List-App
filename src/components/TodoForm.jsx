import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';

export default function TodoForm({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    addTodo({ text: input.trim(), completed: false, priority: 'low' });
    setInput('');
  };

  return (
    <motion.form 
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit">
        <FiPlus />
      </button>
    </motion.form>
  );
}
