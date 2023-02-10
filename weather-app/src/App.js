import "./App.css";
import "./components/WeatherCss.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherSearch from "./components/WeatherSearch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayArea from "./components/DisplayArea";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WeatherSearch />} />
          <Route path="/weather" element={<DisplayArea />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
