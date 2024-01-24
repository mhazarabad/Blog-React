import './App.css';
import BlogLanding from './components/blog';
import BlogPost from './components/blogPost';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import { useEffect } from 'react';

function App() {

  // useEffect(() => {
  //   window.ssMenu();
  // }, []);

  return (
    <div id="top" className="s-wrap site-wrapper">

      <header className="s-header">

        <div className="header__top">

          <a href="#0" id='menu_toggle' className="header__menu-toggle" onClick={()=> window.menuToggle()}><span>Menu</span></a>

        </div>

        <Nav />



      </header>

      <div className="s-content">
        <Router>
          <Routes >
            <Route path="/:postSlug" element={<BlogPost />} />
            <Route exact path="/" element={<BlogLanding />} />
          </Routes>
        </Router>
      </div>



      <footer className="s-footer">
        <div className="row">
          <div className="column large-full footer__content">
            <div className="footer__copyright">
            This Website is developed by <a href="https://mhazarabad.github.io">Hadi Azarabad</a> {new Date().getFullYear()}
            </div>
          </div>
        </div>


      </footer>

    </div>
  );
}

export default App;
