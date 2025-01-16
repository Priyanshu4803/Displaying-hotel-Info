import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
function HotelDetail() {
  // const {id} = useParams();
  const location = useLocation();
  const { hotel } = location.state;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        height: "100vh",
      }}
    >
      <div>
        <Card
          className="card"
          key={hotel.id}
          style={{
            height: "30vh",
            width: "50vw",
            backgroundColor: "transparent",
            padding: "15px",
            border: "0",
          }}
        >
          <Card.Img
            variant="top"
            src={hotel.image}
            style={{ border: "1px solid black", marginLeft: "20px" }}
          />
          <Card.Body>
            <Card.Title style={{ fontSize: "5vh" }}>{hotel.name}</Card.Title>
          </Card.Body>
        </Card>
      </div>

      <div>
        <div className="tab-box" style={{width : "50vw"}}>
          <div
            className="tab-container"
            style={{
              height: "30vh",
              overflow: "hidden", 
              display: "flex",
              flexDirection: "column",
            }}
          >
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
              {Object.entries(hotel.details).map(([tag, tagValue], index) => (
                <Tab
                  key={index}
                  eventKey={tag}
                  title={tag}
                  style={{
                    fontSize: "20px",
                    textAlign: "center",
                    overflowY: "auto", 
                    padding: "10px",
                    height: "100%", 
                  }}
                >
                  {tagValue}
                </Tab>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelDetail;
