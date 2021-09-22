import './App.css';
import Footer from './component/layout/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './component/layout/Header';
import Home from './component/index/Home';
import About from './component/index/About';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            
            <li>
              <Link  to="/">Home</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
        </Switch>
      </div>
    </Router>
    <Footer></Footer>
    </div>
  );
}

export default App;
