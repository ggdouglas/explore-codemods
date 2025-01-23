import { Button } from "@blueprintjs/core";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Button intent="primary" small={true}>
        Hello (small) world!
      </Button>
    </div>
  );
}

export default App;
