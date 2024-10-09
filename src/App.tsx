import { Suspense } from "react";

import "./App.css";
// import { Button } from "./components/ui/button";
import { createRoot } from "react-dom/client";
// import { createRoot } from "react-dom/client";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>hi, this is sharing button from components repo</div>
      <button>Button from REACT</button>
      {/* <Button onClick={() => setCount((count) => count + 1)}>
        shad button
      </Button>
      count is {count} */}
    </>
  );
}

const ReactMfe = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  );
};

// Register the custom web component to be used in HTML
class WebComponent extends HTMLElement {
  connectedCallback() {
    const root = createRoot(this); // Use createRoot to create the React root
    root.render(<ReactMfe />);
  }
}

// Define the custom element
customElements.define("react-element", WebComponent);

export default App;
