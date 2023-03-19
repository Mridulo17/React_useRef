import { useRef, useState } from "react";

function App() {
  const resultRef = useRef(null);
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);

  const plus = (e) => {
    e.preventDefault();
    setResult(() => result + Number(inputRef.current.value));
  };

  const minus = (e) => {
    e.preventDefault();
    setResult(() => result - Number(inputRef.current.value));
  };

  const times = (e) => {
    e.preventDefault();
    setResult(() => result * Number(inputRef.current.value));
  };

  const divide = (e) => {
    e.preventDefault();
    setResult(() => result / Number(inputRef.current.value));
  };

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  };

  const resetResult = (e) => {
    e.preventDefault();
    setResult((prevVal) => prevVal * 0);
  };

  return (
    <div className="App">
      <div className="">
        <h2>Simplest Calculator</h2>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0.9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>Add</button>
        <button onClick={minus}>Subtract</button>
        <button onClick={times}>Multuply</button>
        <button onClick={divide}>Divide</button>
        <button onClick={resetInput}>Result Input</button>
        <button onClick={resetResult}>Rest Result</button>
      </form>
    </div>
  );
}

export default App;
