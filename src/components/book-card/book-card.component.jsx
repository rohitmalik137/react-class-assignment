import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart.actions';

import './book-card.styles.css';

const BookCard = ({ name, imageUrl, description, price, book }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="bookcardContainer">
        <Button
          onClick={() => dispatch(addItem(book))}
          variant="outline-primary"
          className="w-100"
        >
          Add to Cart
        </Button>
        <img
          style={{ cursor: 'pointer' }}
          width="100%"
          height="400px"
          onClick={handleShow}
          src={imageUrl}
          alt="book"
        />
        <p style={{ fontSize: 'large', fontWeight: 'bold' }}>{name}</p>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            width="100%"
            height="300px"
            onClick={handleShow}
            src={imageUrl}
            alt="book"
          />
        </Modal.Body>
        <div
          style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}
        >
          <h3>Description:</h3>
          <span
            style={{
              fontSize: 'large',
              fontWeight: 'bold',
              marginLeft: '10px',
            }}
          >
            {description}
          </span>
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}
        >
          <h3>Price:</h3>
          <span
            style={{
              fontSize: 'large',
              fontWeight: 'bold',
              marginLeft: '10px',
            }}
          >
            {price}
          </span>
        </div>
      </Modal>
    </>
  );
};

export default BookCard;
