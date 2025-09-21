import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import Layout from './components/layout/Layout';
import Solutions from './pages/solutions/Solutions';
import Technologies from './pages/technologies/Technologies';
import Industries from './pages/Industries/Industries';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Layout><Home /></Layout> } />
          <Route path='/solutions' element={<Layout><Solutions /></Layout>} />
          <Route path='/technologies' element={<Layout><Technologies /></Layout>} />
          <Route path='/industries' element={<Layout><Industries /></Layout>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;