import React from "react";
import ReactDOM from "react-dom";
import { SnackbarProvider } from "react-snackbar-alert";
import Toolbar from "./Toolbar";
import "./index.css";



function App() {
  return (
    <div className="App">
      <SnackbarProvider position="top" >
        <Toolbar />
      </SnackbarProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
