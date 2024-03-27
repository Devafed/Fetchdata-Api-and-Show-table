import Layout from "./compontents/layout.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/dashboard" element={<Layout />} />
        <Route path="/transaction" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
