import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Form from "./views/Form";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      {/* <Home /> */}
      {/* <Form /> */}
    </div>
  );
}

export default App;
