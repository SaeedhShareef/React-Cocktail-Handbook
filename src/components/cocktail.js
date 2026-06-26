import React, { Component } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/form";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";


class Cocktail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkName: "",
      drinkImage: [],
      drinkId: "",
      drinkInstructions: "",
      drinkIngredients: "",
      clickedButton: false,
      inputValue: "",
      searchedByName: false,
      placeHolderText: "",
      searchType: "",
      noResults: "",
      drinkResults: [],
      combinedResults: [],
      openModal: false,
      
    };
    // const [show, setShow] = useState(false);
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  handleKeyPress = (event) => {
    if (event.key === "Enter") {
        this.getFullDrinkList();
    }
  };

  handleTextChange(event) {
    this.setState({ inputValue: event.target.value });
    if (event.key === "enter") {
      this.getFullDrinkList();
    }
  }

  searchByDrinkId = (event) => {
    let Id = event.target.value
   
  axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${Id}`).then((res) => {
  
    let ingredientArray = [];
        if (res.data.drinks[0].strIngredient1 != null) {
          ingredientArray.push(res.data.drinks[0].strIngredient1);
        }
        if (res.data.drinks[0].strIngredient2 != null) {
          ingredientArray.push(res.data.drinks[0].strIngredient2);
        }
        if (res.data.drinks[0].strIngredient3 != null) {
          ingredientArray.push(res.data.drinks[0].strIngredient3);
        }
        if (res.data.drinks[0].strIngredient4 != null) {
          ingredientArray.push(res.data.drinks[0].strIngredient4);
        }
        if (res.data.drinks[0].strIngredient5 != null) {
          ingredientArray.push(res.data.drinks[0].strIngredient5);
        }
        if (res.data.drinks[0].strIngredient6 != null) {
          ingredientArray.push(res.data.drinks[0].strIngredient6);
        }
        if (res.data.drinks[0].strIngredient7 != null) {
          ingredientArray.push(res.data.drinks[0].strIngredient7);
        }
        if (res.data.drinks[0].strIngredient8 != null) {
          ingredientArray.push(res.data.drinks[0].strIngredient8);
        }
        if (res.data.drinks[0].strIngredient9 != null) {
          ingredientArray.push(res.data.drinks[0].strIngredient9);
        }
        if (res.data.drinks[0].strIngredient10 != null) {
          ingredientArray.push(res.data.drinks[0].strIngredient10);
        }
        if (res.data.drinks[0].strIngredient11 != null) {
          ingredientArray.push(res.data.drinks[0].strIngredient11);
        }
        if (res.data.drinks[0].strIngredient12 != null) {
          ingredientArray.push(res.data.drinks[0].strIngredient12);
        }
        if (res.data.drinks[0].strIngredient13 != null) {
          ingredientArray.push(res.data.drinks[0].strIngredient13);
        }
        if (res.data.drinks[0].strIngredient14 != null) {
          ingredientArray.push(res.data.drinks[0].strIngredient14);
        }
        if (res.data.drinks[0].strIngredient15 != null) {
          ingredientArray.push(res.data.drinks[0].strIngredient15);
        }

        const filteredList = ingredientArray.map((items) => {
          return <li key={items.toString()}> {items} </li>;
        });

        this.setState({
          drinkName: res.data.drinks[0].strDrink,
          drinkImage: res.data.drinks[0].strDrinkThumb + "/preview",
          drinkInstructions: res.data.drinks[0].strInstructions,
          drinkIngredients: filteredList,
          clickedButton: true,
        });
       this.handleShow();
  })
  }

  getRandomDrink = () => {
    
    this.handleShow();

    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((res) => {
        let ingredientArray = [];
        if (res.data.drinks[0].strIngredient1 != null) {
          ingredientArray.push(res.data.drinks[0].strIngredient1);
        }
        if (res.data.drinks[0].strIngredient2 != null) {
          ingredientArray.push(res.data.drinks[0].strIngredient2);
        }
        if (res.data.drinks[0].strIngredient3 != null) {
          ingredientArray.push(res.data.drinks[0].strIngredient3);
        }
        if (res.data.drinks[0].strIngredient4 != null) {
          ingredientArray.push(res.data.drinks[0].strIngredient4);
        }
        if (res.data.drinks[0].strIngredient5 != null) {
          ingredientArray.push(res.data.drinks[0].strIngredient5);
        }
        if (res.data.drinks[0].strIngredient6 != null) {
          ingredientArray.push(res.data.drinks[0].strIngredient6);
        }
        if (res.data.drinks[0].strIngredient7 != null) {
          ingredientArray.push(res.data.drinks[0].strIngredient7);
        }
        if (res.data.drinks[0].strIngredient8 != null) {
          ingredientArray.push(res.data.drinks[0].strIngredient8);
        }
        if (res.data.drinks[0].strIngredient9 != null) {
          ingredientArray.push(res.data.drinks[0].strIngredient9);
        }
        if (res.data.drinks[0].strIngredient10 != null) {
          ingredientArray.push(res.data.drinks[0].strIngredient10);
        }
        if (res.data.drinks[0].strIngredient11 != null) {
          ingredientArray.push(res.data.drinks[0].strIngredient11);
        }
        if (res.data.drinks[0].strIngredient12 != null) {
          ingredientArray.push(res.data.drinks[0].strIngredient12);
        }
        if (res.data.drinks[0].strIngredient13 != null) {
          ingredientArray.push(res.data.drinks[0].strIngredient13);
        }
        if (res.data.drinks[0].strIngredient14 != null) {
          ingredientArray.push(res.data.drinks[0].strIngredient14);
        }
        if (res.data.drinks[0].strIngredient15 != null) {
          ingredientArray.push(res.data.drinks[0].strIngredient15);
        }

        const filteredList = ingredientArray.map((items) => {
          return <li key={items.toString()}> {items} </li>;
        });

        this.setState({
          drinkName: res.data.drinks[0].strDrink,
          drinkImage: res.data.drinks[0].strDrinkThumb + "/preview",
          drinkInstructions: res.data.drinks[0].strInstructions,
          drinkIngredients: filteredList,
          clickedButton: true,
        });
      });
  };

  handleShow = () => {
    this.setState({ openModal: true });
  };

  handleClose = () => {
    this.setState({ openModal: false });
  };

  getFullDrinkList = () => {
    
    let inputVar = this.state.inputValue;
    this.setState({ drinkResults: [] });
    this.setState({ searchedByName: true });
    this.setState({ combinedResults: [] });
    if (inputVar === "") {
      return;
    }
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputVar}`,
      )
      .then((res) => {
        
        if (!res.data.drinks) {
          this.setState({ noResults: "No Results Found" });
          return;
        } else {
          res.data.drinks.forEach((drink) => {
           
            this.state.combinedResults.push(drink);
            this.state.drinkResults.push(drink.strDrink);
            this.setState({drinkImage: drink.strDrinkThumb + "/preview"});
            this.setState({drinkId: drink.idDrink});
            this.setState({ noResults: "" });
          });
        }
        this.state.drinkResults.sort();
      });
  };

  render() {
    return (
      <div className="container">
        <h1 className="header">Cocktail Handbook</h1>
        <div>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Search for a Drink"
              aria-label="Search for a Drink"
              aria-describedby="basic-addon2"
              
              value={this.state.inputValue}
              onChange={this.handleTextChange}
              onKeyPress={this.handleKeyPress}
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              onClick={this.getFullDrinkList}
            >
              Search
            </Button>
          </InputGroup>

          <Button
            variant="primary"
            className="surpriseButton"
            onClick={this.getRandomDrink}
          >
            Surprise me!
          </Button>
        </div>

        {/* Standard Search Start */}

        {this.state.combinedResults.length >= 1 ? (
          this.state.combinedResults.map((results) => (
            <div className="drinkCards">
              <Card
                key={results.idDrink}
                style={{
                  width: "15rem",
                  height: "fit-content",
                  marginBottom: "20px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <Card.Img variant="top" src={results.strDrinkThumb} />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>
                    {results.strDrink}
                  </Card.Title>
                  <Button
                    variant="primary"
                    className="fullRecipeButton"
                    value={results.idDrink}
                    onClick={this.searchByDrinkId}
                  >
                    See Full Recipe
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <h3 className="header">{this.state.noResults}</h3>
        )}
        <div>
          <p> {this.drinkResults}</p>
        </div>

         {/* Standard Search End */}

        {/* Randomized Drink Start */}

        {this.state.clickedButton ? (
          <Modal show={this.state.openModal}
           onHide={this.handleClose}
           size="xl"
           >
            <Modal.Header closeButton>
              <Modal.Title>Full Recipe</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="drinkCards">
                <Row xs={1} md={1} lg={1} xl={3}>
                  <Card
                    style={{
                      width: "15rem",
                      height: "fit-content",
                      marginBottom: "20px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <Card.Img variant="top" src={this.state.drinkImage} />
                    <Card.Body>
                      <Card.Title style={{ textAlign: "center" }}>
                        {this.state.drinkName}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Card
                    style={{
                      width: "15rem",
                      marginBottom: "20px",
                      height: "296px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <Card.Title
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                    >
                      Ingredients
                    </Card.Title>
                    <Card.Body>{this.state.drinkIngredients}</Card.Body>
                  </Card>
                  <Card
                    style={{
                      width: "15rem",
                      marginBottom: "20px",
                      minHeight: "296px",
                      maxHeight: "fit-content",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <Card.Title
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                    >
                      Instructions
                    </Card.Title>
                    <Card.Body>{this.state.drinkInstructions}</Card.Body>
                  </Card>
                </Row>
              </div>
            </Modal.Body>
          </Modal>
        ) : (
          ""
        )}
        {/* Randomized Drink End */}
      </div>
    );
  }
}

export default Cocktail;
