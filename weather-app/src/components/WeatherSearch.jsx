import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import DisplayArea from "./DisplayArea";

const WeatherSearch = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [locationArea, setLocationArea] = useState("");
  const [loading, setLoading] = useState(true);

  const basepoint = `https://api.openweathermap.org/data/2.5/weather?q=`;
  const apiKey = ",&APPID=6934ba3e9b845ef11d371614239e858e";

  const handleChange = (e) => {
    setLocationArea(e.target.value);
  };

  const fetchWeather = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch(basepoint + locationArea + apiKey, {
        method: "GET",
      });
      if (response.ok) {
        const rawWeatherData = await response.json();
        console.log(rawWeatherData);
        setWeatherData(rawWeatherData);
        setLoading(false);
      } else {
        console.log("Error!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  fetchWeather();

  return (
    <>
      <Container>
        <div className="searchBar">
          <h2>Weather App</h2>
          <Form onSubmit={fetchWeather}>
            <Form.Control
              type="search"
              value={locationArea}
              placeholder="Please enter city and press Enter~"
              onChange={handleChange}
            />
          </Form>
        </div>
        {loading ? <></> : <DisplayArea info={weatherData} />}

        <div className="bottom-area"></div>
      </Container>
    </>
  );
};

export default WeatherSearch;
