import { useState } from 'react';

export default function PrioritySelector({ priority, onChange }) {
  const [selectedPriority, setSelectedPriority] = useState(priority);

  const handlePriorityChange = (e) => {
    setSelectedPriority(e.target.value);
    onChange(e.target.value);
  };

  return (
    <select value={selectedPriority} onChange={handlePriorityChange}>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
  );
}
