import React from "react";
import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <div className="all-app">
        <Weather city="Kyiv" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
