import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {
  const [formValues, setFormValues] = useState({});
  const navigate = useNavigate();

  const onChangeFromField = (event) => {
    const { value, name, type } = event.target;
    setFormValues({
      ...formValues,
      [name]: type === 'number' ? Number(value) : value,
    });
  };
  const onClickSubmit = async () => {
    try {
      await axios({
        url: 'http://localhost:4000/api/movies',
        method: 'POST',
        data: formValues,
      });
      navigate(`/`);
    } catch (e) {
      alert('Add Movie Failed!');
    }
  };
  return (
    <Card>
      <Card.Header>
        <h4>Add a Movie</h4>
      </Card.Header>
      <Card.Body>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Movie Title</Form.Label>
          <Form.Control type="text" name="title" onChange={onChangeFromField} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="rating">
          <Form.Label>Movie Rating</Form.Label>
          <Form.Control
            type="number"
            name="rating"
            onChange={onChangeFromField}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="poster">
          <Form.Label>Movie Poster</Form.Label>
          <Form.Control
            type="text"
            name="poster"
            onChange={onChangeFromField}
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={onClickSubmit}>
          Submit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AddMovie;
