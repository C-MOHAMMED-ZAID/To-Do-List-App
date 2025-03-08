export default function ExportButton({ todos }) {
    const exportToCSV = () => {
      const csvContent = [
        ['Task', 'Status', 'Priority', 'Due Date'],
        ...todos.map(todo => [
          todo.text,
          todo.completed ? 'Completed' : 'Pending',
          todo.priority,
          todo.dueDate || 'N/A'
        ])
      ].map(e => e.join(',')).join('\n');
  
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'todos.csv';
      a.click();
    };
  
    return (
      <button onClick={exportToCSV} className="export-button">
        Export to CSV
      </button>
    );
  }
  