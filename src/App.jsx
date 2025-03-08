import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import './styles/main.css';



export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/todos" element={<TodoPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}


