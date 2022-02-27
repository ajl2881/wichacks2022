import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <div>
        <nav>
          <ul id="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/educator">Educators</Link>
            </li>
            <li>
            <Link to="/parent">Parent</Link>
            </li>
          </ul>
        </nav>
      </div>
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/educator">
          <Educators />
        </Route>
        <Route path="/parent">
          <Parent />
        </Route>
      </Switch>
      </div>
  );
}

export default App;
