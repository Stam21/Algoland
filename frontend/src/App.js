import React from "react";
import RouterSetup from "./views/Router"

function App() {
  return (
    <div className ="container">
        <RouterSetup />
    </div>
  );
}
const root =document.getElementById("root");
root.render(<App />);
export default App;