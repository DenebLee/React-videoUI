import React from "react";
import ReactDOM from "react-dom";
import { SnackbarProvider } from "react-snackbar-alert";
import Toolbar from "./Toolbar";
import "./index.css";
import Avatar from './Avatar';



function App() {
  return (
    <div className="App">
      <SnackbarProvider position="top" >
        <h1 style={{color:'white',left:'46%',position:'absolute'}}>테스트중</h1>
        <Toolbar />
        <Avatar/>
      </SnackbarProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
