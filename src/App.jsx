import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import Layout from './components/layout/Layout';
import Solutions from './pages/solutions/Solutions';
import Technologies from './pages/technologies/Technologies';
import Industries from './pages/Industries/Industries';
import Works from './pages/works/Works';
import About from './pages/about/About';
import NotFound from './pages/notFound/NotFound';
import Call from './pages/call/Call';
import Success from './pages/success/Success';
import Wrapper from './components/wrapper/Wrapper';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          {/*------- With layout ---------*/}
          <Route path='/' element={<Layout><Home /></Layout> } />
          <Route path='/solutions' element={<Layout><Solutions /></Layout>} />
          <Route path='/technologies' element={<Layout><Technologies /></Layout>} />
          <Route path='/industries' element={<Layout><Industries /></Layout>} />
          <Route path='/our-works' element={<Layout><Works /></Layout>} />
          <Route path='/about-us' element={<Layout><About /></Layout>} />
          <Route path='*' element={<Layout><NotFound /></Layout>} />

          {/*------- With wrapper ---------*/}
          <Route path="/start/basic-details" element={<Wrapper><Call /></Wrapper>} />
          <Route path="/success" element={<Wrapper><Success /></Wrapper>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;