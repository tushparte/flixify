import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import Navbar from "./components/Navbar";
class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h2>Testing</h2>
          Hello there
        </div>
      </div>
    );
  }
}

export default App;
