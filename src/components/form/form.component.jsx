import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import './form.styles.css';

const Form = () => {
  const movies = useSelector((state) => state.movies.movies);
  const [movie, setMovie] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    setMovie(event.target.value);
  };

  return (
    <>
      <div className="formContainer">
        <label>
          Select a movie: &nbsp;
          <select name="cars" id="cars" onChange={handleChange}>
            <option value="" selected disabled hidden>
              Choose here
            </option>
            {movies.map((movie) => {
              return (
                <option key={movie.id} value={movie.name}>
                  {movie.name}
                </option>
              );
            })}
          </select>
        </label>
        <Button
          size="sm"
          className="ml-2"
          variant="success"
          onClick={handleShow}
        >
          Show
        </Button>
      </div>
      {movies
        .filter((oneMovie) => oneMovie.name === movie)
        .map((singleMovie) => {
          return (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{singleMovie.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img
                  width="100%"
                  height="300px"
                  onClick={handleShow}
                  src={singleMovie.imageUrl}
                  alt="book"
                />
              </Modal.Body>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: '10px',
                }}
              >
                <h3>Timing:</h3>
                <span
                  style={{
                    fontSize: 'large',
                    fontWeight: 'bold',
                    marginLeft: '10px',
                  }}
                >
                  {singleMovie.Timings}
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: '10px',
                }}
              >
                <h3>Price:</h3>
                <span
                  style={{
                    fontSize: 'large',
                    fontWeight: 'bold',
                    marginLeft: '10px',
                  }}
                >
                  {singleMovie.price}
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: '10px',
                }}
              >
                <h3>Rating:</h3>
                <span
                  style={{
                    fontSize: 'large',
                    fontWeight: 'bold',
                    marginLeft: '10px',
                  }}
                >
                  {singleMovie.rating}
                </span>
              </div>
            </Modal>
          );
        })}
    </>
  );
};

export default Form;
