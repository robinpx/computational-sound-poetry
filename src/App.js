import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './components/Index';

function App() {
  return (
    <Router>
    <div id="container">
      <div id="content">
      <Routes>
        <Route index element={<Index />} />
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
