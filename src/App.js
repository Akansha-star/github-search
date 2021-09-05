import React from "react";
import "./App.css";
import Container from "./components/Container";

function App() {
  const [showMenu, setshowMenu] = React.useState(false);

  return (
    <div className="d-flex flex-row">
      <div className="col-md-9 col-12 container">
        <Container />
      </div>
    </div>
  );
}

export default App;
