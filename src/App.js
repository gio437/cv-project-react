import './App.css';
import General from './components/General';
import Education from './components/Education';
import Practical from './components/Practical';

function App() {
  return (
    <div>
      <h1 className='head'>CV Generator</h1>
      <General />
      <Education />
      <Practical />
    </div>
  );
}

export default App;
