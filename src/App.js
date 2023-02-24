import './App.css';
import {General, Education, Practical} from './General.js'

function App(props) {
  return (
    <div>
      <General />
      <Education />
      <Practical />
    </div>
  );
}

export default App;
