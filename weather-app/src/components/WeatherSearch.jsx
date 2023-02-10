import { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";

const WeatherSearch = () => {
  const [weatherData, setWeatherData] = useState("");
  const [locationArea, setLocationArea] = useState("");

  const basepoint = `https://api.openweathermap.org/data/2.5/weather?q=`;
  const apiKey = ",&APPID=6934ba3e9b845ef11d371614239e858e";

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
      } else {
        console.log("Error!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container>
        <div className="searchBar">
          <h2>Weather App</h2>
          <Form onSubmit={fetchWeather}>
            <Form.Control
              type="search"
              value={locationArea}
              placeholder="enter city!"
              onChange={(e) => {
                setLocationArea(e.target.value);
              }}
            />
          </Form>
        </div>

        {/* <DisplayArea /> */}
      </Container>
    </>
  );
};

export default WeatherSearch;
