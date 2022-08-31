import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>hello world</div>}></Route>
    </Routes>
  );
}

export default App;
