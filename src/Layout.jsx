import { useTheme } from './context/ThemeContext';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className={`app ${theme}`}>
      <nav className="navbar">
        <Link to="/" className="brand">TodoPro</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/todos">Todos</Link>
          <button onClick={toggleTheme}>
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Layout;