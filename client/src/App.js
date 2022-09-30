import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Form from "./views/Form";
import Detail from "./views/Detail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
