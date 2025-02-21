import { useState } from "react";

import "./App.css";
import { CustomerAdd } from "./CustomerAdd";
import { CustomerView } from "./CustomerView";
import { Provider } from "react-redux";
import { store } from "./store";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <div>
        <h1>React Redux Customer Example</h1>
        <CustomerAdd />
        <CustomerView />
      </div>
    </Provider>
  );
}

export default App;
