import './App.css';
import BlogLanding from './components/blog';
import BlogPost from './components/blogPost';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav';

function App() {

  // useEffect(() => {
  //   window.ssMenu();
  // }, []);


  return (
    <div id="top" className="s-wrap site-wrapper">
      <Router>
        <header className="s-header">

          <div className="header__top">

            <a href="#0" id='menu_toggle' className="header__menu-toggle" onClick={() => window.menuToggle()}><span>Menu</span></a>

          </div>

          <Nav />



        </header>

        <div className="s-content">

          <Routes >
            <Route path="/post/:post_slug" element={<BlogPost />} />
            <Route path="/category/:category_slug" element={<BlogLanding />} />
            <Route path="/tag/:tag_slug" element={<BlogLanding />} />
            <Route exact path="/" element={<BlogLanding />} />
          </Routes>

        </div>
      </Router>


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
