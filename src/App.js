import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { changeName, setHotelDetails } from "./features/hotel/hotelslice";
import Card from "react-bootstrap/Card";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [hotels, setHotels] = useState([]);
  const name = useSelector((state) => state.hotelName.value);
  const tags = useSelector((state) => state.hotelName.hotelDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/Hotels-data.json")
      .then((response) => response.json())
      .then((data) => {
        setHotels(data.hotels);
      })
      .catch((error) => {
        console.error("Error fetching the JSON file:", error);
      });
  }, []);

  const handleHotelClick = (hotelName, hotelDetails) => {
    dispatch(changeName(hotelName));
    dispatch(setHotelDetails(hotelDetails));
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="two alt-two">
        <h1>
          Tranquil Retreats
          <span>Escape the Ordinary</span>
        </h1>
      </div>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div
          className="slider-container"
          style={{
            margin: "20px",
            color: "black",
            width: "95vw",
          }}
        >
          <Slider {...sliderSettings}>
            {hotels.map((hotel, index) => (
              <Card
                className="card"
                key={index}
                onClick={() => handleHotelClick(hotel.name, hotel.details)}
              >
                <Card.Img variant="top" src={hotel.image} />
                <Card.Body>
                  <Card.Title style={{ fontSize: "20px" }}>
                    {hotel.name}
                  </Card.Title>
                  <div className="btn">Click for more details {">"}</div>
                </Card.Body>
              </Card>
            ))}
          </Slider>
        </div>
      </div>

      <h3 style={{ textAlign: "center", marginTop: "5px" }}>{name}</h3>
      <div className="tab-box">
        <div className="tab-container">
          <Tabs
            defaultActiveKey="description"
            id="fill-tab-example"
            className="mb-3"
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "transparent",
              fontSize: "20px",
            }}
          >
            {Object.entries(tags).map(([tag, tagValue], index) => (
              <Tab
                key={index}
                eventKey={tag}
                title={tag}
                style={{ fontSize: "20px", textAlign: "center" }}
              >
                {tagValue}
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default App;
