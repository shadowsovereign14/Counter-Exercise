
import './App.css';
import CounterGroup from './features/counter/CounterGroup';

function App() {
  const size = 3;
  return (
    <div className="App">
      <CounterGroup sizeNumber={size}/>
    </div>
  );
}

export default App;
