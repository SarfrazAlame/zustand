import { useEffect } from "react";
import { useCounterStore } from "./store";

// you can access from outside of function
const logCount = () => {
  const cout = useCounterStore.getState().count;
  console.log(cout);
};

const App = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  useEffect(()=>{
    logCount()
  },[])
  return (
    <div>
      App {count}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default App;
