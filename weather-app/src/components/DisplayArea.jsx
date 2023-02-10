import { Container, Row } from "react-bootstrap";
import "./WeatherCss.css";

const DisplayArea = (props) => {
  return (
    <>
      <Container>
        <Row>
          <div className="weather-container">
            <h5>{props.info.name}</h5>
            {props.info.weather[0].description}
            {props.info.main.temp}
            {props.info.main.temp_min}
            {props.info.main.temp_max}
            {props.info.main.feels_like}
          </div>
        </Row>
      </Container>
    </>
  );
};

export default DisplayArea;
