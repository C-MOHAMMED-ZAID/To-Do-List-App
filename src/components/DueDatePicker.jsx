import { useState } from 'react';
import { Calendar } from 'react-calendar';

export default function DueDatePicker({ selectedDate, onSelect }) {
  const [date, setDate] = useState(selectedDate);

  const handleChange = (date) => {
    setDate(date);
    onSelect(date);
  };

  return (
    <Calendar
      onChange={handleChange}
      value={date}
      minDate={new Date()}
    />
  );
}
