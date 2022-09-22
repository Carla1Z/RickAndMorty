import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./views/Form";
import Home from "./views/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
      </Routes>
      {/* <Home /> */}
      {/* <Form /> */}
    </div>
  );
}

export default App;
