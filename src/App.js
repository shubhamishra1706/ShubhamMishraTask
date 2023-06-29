import React, { useEffect, useState } from "react";
import { Card, Container, Form } from "react-bootstrap";
import { ThermometerHalf, Snow, HandThumbsUpFill, HandThumbsDownFill } from "react-bootstrap-icons";
import data from "./data.json";
import './App.css'
import Tmr from "./Tmr";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(data);
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    setWeatherData(weatherData);
  }, [weatherData]);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <>
      <div className="container-fluid body">
        <div className="row">
          <div className="col">
            <Container className=" col-7">
              <h1 className="mt-4 mx-auto">Weather App</h1>
              <Tmr />
              <Form.Group className="mt-2">
                <Form.Label>Select City:</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedCity}
                  onChange={handleCityChange}
                >
                  <option value="">-- Select a city --</option>
                  {weatherData.map((data, index) => (
                    <option key={index} value={data.city}>
                      {data.city}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              {selectedCity && weatherData ? (
                <>
                  <div className="card-container">
                    <Card className="mt-2 custom-card">
                      <div className="d-flex">
                        <div className="w-50">
                          <Card.Body>
                            <Card.Title>{selectedCity}</Card.Title>
                            {weatherData.map((data, index) => {
                              if (data.city === selectedCity) {
                                return (
                                  <div key={index}>
                                    <Card.Text>
                                      Weather: {data.weatherDescription}
                                    </Card.Text>
                                    <Card.Text>
                                      Humidity: {data.humidity}%
                                    </Card.Text>
                                    <Card.Text>
                                      Wind Speed: {data.windSpeed} km/h
                                    </Card.Text>
                                  </div>
                                );
                              }
                              return null;
                            })}
                          </Card.Body>
                        </div>
                        <div className="w-50 d-flex align-items-center justify-content-end mx-4">
                          {weatherData.map((data, index) => {
                            if (data.city === selectedCity) {
                              const isHot = data.temperature > 25;
                              return (
                                <div
                                  key={index}
                                  className="d-flex align-items-center"
                                >
                                  {isHot ? (
                                    <ThermometerHalf size={100} color="red" />
                                  ) : (
                                    <Snow size={100} color="blue" />
                                  )}
                                  <span className="ml-2">{data.temperature}°C</span>
                                </div>
                              );
                            }
                            return null;
                          })}
                        </div>
                      </div>
                    </Card>
                  </div>

                  <div className="container-fluid my-2">
                    <div className="row">
                      <div className="col mx-auto">
                        <Card>
                          <h5 className="mx-auto my-2">Current Air Quality</h5>
                          <hr />
                          <div className="container">
                            <div className="row">
                              <div className="col-4">
                                {weatherData.map((data, index) => {
                                  if (data.city === selectedCity) {
                                    const isGoodAirQuality = data.airQuality === "good";
                                    return (
                                      <div
                                        key={index}
                                        className="d-flex align-items-center my-2"
                                      >
                                        <h4>{data.airQuality}</h4>
                                        {isGoodAirQuality ? (
                                          <HandThumbsUpFill size={100} color="blue" />
                                        ) : (
                                          <HandThumbsDownFill size={100} color="red" />
                                        )}
                                      </div>
                                    );
                                  }
                                  return null;
                                })}
                              </div>
                              <div className="col-7">
                                {weatherData.map((data, index) => {
                                  if (data.city === selectedCity) {
                                    return (
                                      <div key={index}>
                                        <h6>Air Quality Description:</h6>
                                        <p>{data.airQualityDescription}</p>
                                      </div>
                                    );
                                  }
                                  return null;
                                })}
                              </div>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <p>Loading weather data...</p>
              )}
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
