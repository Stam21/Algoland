import './App.css';
import CodeEditor from "./components/CodeEditor/CodeEditor";


function App() {
  return (
    <div className="App">
      <CodeEditor />
    </div>
  );
}
const root =document.getElementById("root");
root.render(<App />);
export default App;
