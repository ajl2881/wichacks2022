import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';

function Parent() {
  return (
    <div className="App">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <header className="App-header">
        <h1>Raccoon Rex’s Library of Internet Safety</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Parents :)
         </p>
        
      </header>
    </div>
  );
}

export default Parent;
