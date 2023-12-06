import React from "react";
import { Card, Col } from "react-bootstrap";
import "../styles/Movie.css";

const Movie = ({ movie }) => {
  return (
    <Col sm={12} md={6} lg={3} className="mt-4">
      <Card
        className="card"
        style={{ marginBottom: "50px", borderRadius: "10px" }}
      >
        <img
          src={movie.Poster}
          alt={`${movie.Title} Poster`}
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        <Card.Body className="card-content" style={{ height: "90px" }}>
          <Card.Title className="card-title text-center">
            <b>
              {movie.Title} ({movie.Year})
            </b>
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Movie;
