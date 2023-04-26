import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  findAllDishesThunk,
  createDishThunk,
  updateDishThunk,
} from "../../services/dishes/dishes-thunks";
import {
  Button,
  Form,
  ListGroup,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function EditDishesScreen() {
  const [dishes, setDishes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const { dishes: dbDishes } = useSelector((state) => state.dishes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findAllDishesThunk());
  }, [dispatch]);

  useEffect(() => {
    setDishes(dbDishes);
  }, [dbDishes]);

  const handleDishChange = (index, field, value) => {
    const newDishes = [...dishes];
    newDishes[index] = {
      ...dishes[index],
      [field]: value,
    };
    setDishes(newDishes);
  };

  const handleIngredientsChange = (dishIndex, ingredientIndex, value) => {
    const newDishes = [...dishes];
    newDishes[dishIndex].ingredients = [...newDishes[dishIndex].ingredients];
    newDishes[dishIndex].ingredients[ingredientIndex] = value;
    setDishes(newDishes);
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
  };

  const handleSaveClick = () => {
    if (editIndex !== null) {
      dispatch(updateDishThunk(dishes[editIndex]));
      setEditIndex(null);
    }
  };
  const [newDishName, setNewDishName] = useState("");
  const [newDishChef, setNewDishChef] = useState("");
  const [newDishIngredients, setNewDishIngredients] = useState("");
  const [newDishDescription, setNewDishDescription] = useState("");
  const [newDishPrice, setNewDishPrice] = useState(0);

  const handleAddNewDish = async () => {
    const newDish = {
      name: newDishName,
      ingredients: newDishIngredients
        .split(",")
        .map((ingredient) => ingredient.trim()),
      chef: newDishChef,
      description: newDishDescription,
      price: newDishPrice,
      image: "default.jpeg",
    };
    await dispatch(createDishThunk(newDish));
    setNewDishName("");
    setNewDishChef("");
    setNewDishIngredients("");
    setNewDishDescription("");
    setNewDishPrice(0);
    await dispatch(findAllDishesThunk());
  };

  const renderDish = (dish, index) => {
    const isEditing = index === editIndex;

    return (
      <ListGroup.Item key={index}>
        <h3>
          {isEditing ? (
            <Form.Control
              type="text"
              value={dish.name}
              onChange={(event) =>
                handleDishChange(index, "name", event.target.value)
              }
            />
          ) : (
            dish.name
          )}
        </h3>
        <div>
          Chef:{" "}
          {isEditing ? (
            <Form.Control
              type="text"
              value={dish.chef}
              onChange={(event) =>
                handleDishChange(index, "chef", event.target.value)
              }
            />
          ) : (
            dish.chef
          )}
        </div>
        <div>Ingredients:</div>
        <ul>
          {dish.ingredients.map((ingredient, ingredientIndex) => (
            <li key={ingredientIndex}>
              {isEditing ? (
                <Form.Control
                  type="text"
                  value={ingredient}
                  onChange={(event) =>
                    handleIngredientsChange(
                      index,
                      ingredientIndex,
                      event.target.value
                    )
                  }
                />
              ) : (
                ingredient
              )}
            </li>
          ))}
        </ul>
        <div>
          Description:{" "}
          {isEditing ? (
            <Form.Control
              as="textarea"
              value={dish.description}
              onChange={(event) =>
                handleDishChange(index, "description", event.target.value)
              }
            />
          ) : (
            dish.description
          )}
        </div>
        <div>
          Price:{" "}
          {isEditing ? (
            <Form.Control
              type="number"
              value={dish.price}
              onChange={(event) =>
                handleDishChange(index, "price", event.target.value)
              }
            />
          ) : (
            dish.price
          )}
        </div>
        {isEditing ? (
          <Button variant="success" onClick={handleSaveClick}>Save</Button>
        ) : (
          <Button variant="warning" onClick={() => handleEditClick(index)}>Edit</Button>
        )}
      </ListGroup.Item>
    );
  };

  return (
    <Container>
      <h2>Dishes</h2>
      <ListGroup>{dishes.map(renderDish)}</ListGroup>
      <Row>
        <Col>
          <h3>Create New Dish</h3>
          <Form>
            <Form.Group controlId="formDishName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                value={newDishName}
                onChange={(event) => setNewDishName(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formDishChef">
              <Form.Label> Chef:</Form.Label>
              <Form.Control
                type="text"
                value={newDishChef}
                onChange={(event) => setNewDishChef(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formDishIngredients">
              <Form.Label>Ingredients (comma-separated):</Form.Label>
              <Form.Control
                type="text"
                value={newDishIngredients}
                onChange={(event) => setNewDishIngredients(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formDishDescription">
              <Form.Label>Description:</Form.Label>
              <Form.Control
                as="textarea"
                value={newDishDescription}
                onChange={(event) => setNewDishDescription(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formDishPrice">
              <Form.Label>Price:</Form.Label>
              <Form.Control
                type="number"
                value={newDishPrice}
                onChange={(event) => setNewDishPrice(event.target.value)}
              />
            </Form.Group>
            <Button variant="warning" className="mt-2" onClick={handleAddNewDish}>Add New Dish</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditDishesScreen;

