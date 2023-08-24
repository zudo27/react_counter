
import './App.css';
import Greet from './components/greet';
import { Welcome } from './components/welcome';
import { Hello } from './components/hello';
import { Counter } from './components/counter';

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Hello />
      <Greet name="Deepika"/>
      <Welcome name="Rajput" /> */}
    </div>
  );
}

export default App;
