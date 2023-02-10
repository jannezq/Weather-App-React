import { Container, Row } from "react-bootstrap";
import "./WeatherCss.css";

const DisplayArea = (props) => {
  return (
    <>
      <Container>
        <Row>
          <div className="weather-container">
            <div className="weather-info">
              <h5>{props.info.name}</h5>
              {props.info.weather[0].description}
              {props.info.main.temp}
              {props.info.main.temp_min}
              {props.info.main.temp_max}
              {props.info.main.feels_like}
            </div>
            <div className="weather-img"></div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default DisplayArea;
