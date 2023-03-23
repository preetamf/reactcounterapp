import { useState } from "react";
import "./App.css";

function App() {
  // using useState to render the value after decrease
  const [count, setCount] = useState(0);

  function decreaseHandler() {
    setCount(count - 1);
  }
  
  function increaseHandler() {
    setCount(count + 1);
  }

  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 flex-col gap-10">

      {/* heading */}
      <div className="text-[#77fd2f] font-medium text-2xl">Increment & Decrement</div>

      <div className="bg-white flex justify-center  gap-12 py-3 rounded-sm text-[25px] text-[#344151]">

        {/* minus btn */}
        <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
          -
        </button>

        {/* number plate */}
        <div className="font-bold gap-12 text-5xl">
          {count}
        </div>

        {/* plus btn */}
        <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
          +
        </button>

      </div>

      {/* reset btn */}
      <button onClick={resetHandler} className="bg-[#2ed02e] text-white px-5 py-2 rounded-sm text-lg">
        Reset
      </button>

    </div>
  );
}

export default App;
