// frontend/src/App.js
import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import MyComponent from "./MyComponent";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route>
            <Route path="/" exact component={MyComponent} />
            {/* Ajoutez d'autres routes ici */}
          </Route>
        </header>
      </div>
    </Router>
  );
}

export default App;
