import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const WeeklyForeCast = (props) => {
  const [weeklyData, setWeeklyData] = useState([]);
  const weekLat = props.week.lat;
  const weekLon = props.week.lon;
  const url = `https://api.openweathermap.org/data/2.5/forecast?`;
  const apiKey = "&appid=6934ba3e9b845ef11d371614239e858e";

  const fetchWeekly = async () => {
    try {
      let response = await fetch(
        url + "lat=" + weekLat + "&lon=" + weekLon + apiKey,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        let weeklydataRaw = await response.json();
        console.log(weeklydataRaw);
        setWeeklyData(weeklydataRaw.list);
      } else {
        alert("Error!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  fetchWeekly();

  return (
    <>
      <h2>Weekly Forcast</h2>
      <Container>
        <Row>
          <Col>
            <h2>{weeklyData.main.temp}</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WeeklyForeCast;
