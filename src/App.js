import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

//----------------
// React Component
//----------------
const App = function () {
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
};

//----------------
// Default Export
//----------------
export default App;
