import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CustomerAdd } from "./CustomerAdd";
import { CustomerView } from "./CustomerView";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React Redux Customer Example</h1>
      <CustomerAdd />
    </div>
  );
}

export default App;
