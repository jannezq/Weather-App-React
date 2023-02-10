import "./App.css";
import "./components/WeatherCss.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherSearch from "./components/WeatherSearch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayArea from "./components/DisplayArea";
// import WeeklyForeCast from "./components/WeeklyForecast";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WeatherSearch />} />
          <Route path="/weather" element={<DisplayArea />} />
          {/* <Route path="/weekly-weather" element={<WeeklyForeCast />} /> */}
          <Route path="*" element={<h2>404 Page Not Found :(</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
