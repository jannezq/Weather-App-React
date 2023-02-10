import { Container, Row, Col } from "react-bootstrap";
import "./WeatherCss.css";
import {
  BsClouds,
  BsThermometerLow,
  BsThermometerHigh,
  BsCompass,
  BsWind,
} from "react-icons/bs";

const DisplayArea = (props) => {
  return (
    <>
      <Container>
        <Row className="outer-container">
          <Col className="d-flex justify-content-center align-items-center">
            <div className="weather-container">
              <div className="p-4 weather-info text-left">
                <h4>
                  {props.info.name} , {props.info.sys.country}
                </h4>
                <p className="main-temp">
                  <BsClouds /> {props.info.main.temp}°C
                </p>
                <p>
                  <b>
                    Feels like {props.info.main.feels_like}°C with {""}
                    {props.info.weather[0].description}.
                  </b>
                </p>
                <span className="mr-5">
                  <BsThermometerLow />
                  {props.info.main.temp_min}°C
                </span>
                <span>
                  {" "}
                  {""}
                  <BsThermometerHigh />
                  {props.info.main.temp_max}°C
                </span>
                <br />
                <span className="mr-5">
                  <BsCompass />
                  {props.info.main.temp_min}°C
                </span>
                <span>
                  {" "}
                  {""}
                  <BsWind />
                  {props.info.wind.speed}m/s
                </span>
              </div>
              <div className="weather-img"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DisplayArea;
