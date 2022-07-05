import React, { useRef } from "react";
import ReactDOM from "react-dom";
import Editor from "@monaco-editor/react";
import "./CodeEditor.scss";

function CodeEditor() {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor; 
  }
  
  function showValue() {
    alert(editorRef.current.getValue());
  }
  
  return (
  <>
    <button class="show-code" onClick={showValue}>Show value</button>
    <Editor
      height="90vh"
      defaultLanguage="javascript"
      defaultValue="// some comment"
      onMount={handleEditorDidMount}
    />
  </>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<CodeEditor />, rootElement);
export default CodeEditor;