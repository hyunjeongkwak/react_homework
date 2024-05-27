import { Fragment } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  const minusCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(count * 0);
  };

  return (
    <Fragment>
      <div className="counter">count: {count}</div>
      <div className="buttons">
        <button className="plus" onClick={addCount}>
          +
        </button>
        <button className="minus" onClick={minusCount}>
          -
        </button>
        <button onClick={resetCount}>reset</button>
      </div>
    </Fragment>
  );
}

export default App;
