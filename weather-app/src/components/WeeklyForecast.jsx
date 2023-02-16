import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const WeeklyForeCast = ({ city }) => {
  const [weeklyData, setWeeklyData] = useState([]);

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=`;
  const apiKey = ",&APPID=6af993cceb0d29ae03dc006dafe28c01";

  const fetchWeekly = async () => {
    try {
      let response = await fetch(url + city + apiKey, {
        method: "GET",
      });
      if (response.ok) {
        let weeklydataRaw = await response.json();
        console.log("this is hourly forecast", weeklydataRaw);
        setWeeklyData(weeklydataRaw.list);
      } else {
        alert("Error!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWeekly();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return (
    <>
      <h2>Weekly Forcast</h2>
      <Container>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default WeeklyForeCast;
