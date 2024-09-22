import { useState } from "react";

import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>hi, this is sharing button from components repo</div>
      <Button onClick={() => setCount((count) => count + 1)}>
        shad button
      </Button>
      count is {count}
    </>
  );
}

export default App;
