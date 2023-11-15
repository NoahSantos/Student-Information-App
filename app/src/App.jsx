import logo from './logo.svg';
import './App.css';
import Student from './components/Student';
import StudentList from './components/StudentList';
import College from './components/College';
// import {data} from './data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <Student name={'Noah Santos'} age={17} course={'Coding'}></Student> */}
        <College></College>
      </header>
    </div>
  );
}

export default App;
