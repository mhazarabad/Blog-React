import './App.css';
import BlogLanding from './components/blog';
import BlogPost from './components/blogPost';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes >
        <Route path="/:postSlug" element={<BlogPost />} />
        <Route exact path="/" element={<BlogLanding />} />
      </Routes>
    </Router>
  );
}

export default App;
