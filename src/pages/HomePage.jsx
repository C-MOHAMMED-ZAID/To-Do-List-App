import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="home-container">
      <div className="hero">
        <h1>Welcome to TodoPro</h1>
        <p>Your ultimate task management solution</p>
        <Link to="/todos" className="cta-button">Get Started</Link>
      </div>
      
      <div className="features">
        <div className="feature-card">
          <h3>📅 Due Dates</h3>
          <p>Set deadlines for your tasks</p>
        </div>
        <div className="feature-card">
          <h3>📊 Analytics</h3>
          <p>Track your productivity</p>
        </div>
        <div className="feature-card">
          <h3>🔔 Reminders</h3>
          <p>Never miss a deadline</p>
        </div>
      </div>
    </div>
  );
}
