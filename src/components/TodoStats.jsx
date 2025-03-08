export default function TodoStats({ todos }) {
    const completed = todos.filter(todo => todo.completed).length;
    const highPriority = todos.filter(todo => todo.priority === 'high').length;
    
    return (
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Tasks</h3>
          <p>{todos.length}</p>
        </div>
        <div className="stat-card">
          <h3>Completed</h3>
          <p>{completed}</p>
        </div>
        <div className="stat-card">
          <h3>High Priority</h3>
          <p>{highPriority}</p>
        </div>
      </div>
    );
  }
  