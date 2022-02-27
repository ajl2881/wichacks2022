import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <header className="App-header">
        <title>Raccoon Rex’s Library of Internet Safety</title>
        <h1>Raccoon Rex’s Library of Internet Safety</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
      </header>
    </div>
  );
}

export default App;
