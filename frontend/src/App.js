import NavMenu from "./components/NavMenu/NavMenu";
import Router from "./Router"

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Router />
    </div>
  );
}
const root =document.getElementById("root");
root.render(<App />);
export default App;