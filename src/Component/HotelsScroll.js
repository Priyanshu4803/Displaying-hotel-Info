import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
function HotelsScroll() {
  const navigate = useNavigate();
  const [hotels, setHotels] = useState([]);
  function handleClick(hotel) {
    navigate(`/${hotel.id}`, { state: {hotel} });
  }
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
                onClick={() => handleClick(hotel)}
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
    </div>
  );
}

export default HotelsScroll;
