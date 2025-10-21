import React, { Component, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/form";
import Modal from 'react-bootstrap/Modal';
// import ImportGroup from "react-bootstrap/InputGroup"
import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import SplitButton from 'react-bootstrap/SplitButton';

class Cocktail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkName: '',
      drinkImage: [],
      drinkId: '',
      drinkInstructions: '',
      drinkIngredients: '',
      clickedButton: false,
      inputValue: '',
      searchedByName: false,
      placeHolderText: '',
      searchType: '',
      noResults: '',
      drinkResults: [],
      combinedResults: [],
      openModal: false,
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSearchTypeChange = this.handleSearchTypeChange.bind(this);
  }
 handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    // Function to execute on Enter key press
    this.getFullDrinkList();
   
  }
}

displayModal = () => {
  this.setState({openModal: true});
};

hideModal = () => {
  this.setState({openModal: false});
}
 


  handleTextChange(event) {
    this.setState({ inputValue: event.target.value });
    if(event.key === 'enter'){
      this.getFullDrinkList();
    }
  };

  handleSearchTypeChange(event) {

  }

  searchByDrinkId = (results) => {
    this.displayModal();
      this.setState({openModal: true});
    //  let Id = results
    //  console.log(Id)
    // axios.get(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${Id}`).then((res) => {
    //   console.log(res)
    // })
  }


  // searchByDrinkId = () => {
    // this.displayModal();
      // this.setState({openModal: true});
    //  let Id = results
    //  console.log(Id)
    // axios.get(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${Id}`).then((res) => {
    //   console.log(res)
    // })
  //}

  getDrink = () => {
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


  // www.thecocktaildb.com/api/json/v1/1/latest.php

 

  getFullDrinkList = () => {
    const inputVar = this.state.inputValue;
    this.setState({drinkResults: []})
    this.setState({searchedByName : true});
    this.setState({combinedResults: []});
    if(inputVar === ''){
      return
    }
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputVar}`).then((res) => {
      console.log(res)
      if(!res.data.drinks) {
      this.setState({noResults: 'No Results Found'})
        return
      } else {
        res.data.drinks.forEach((drink) => {
          this.state.combinedResults.push(drink);
          this.state.drinkResults.push(drink.strDrink);
          this.state.drinkImage.push(drink.strDrinkThumb  + "/preview");
          this.setState({noResults: ''})
         }
        )
      }    
      this.state.drinkResults.sort();
      // this.state.combinedResults.push(this.state.drinkResults + this.state.drinkImage)
    // console.log(this.state.combinedResults);  
    })
  }

  getNonAlcoholic = () => {
    axios.get("www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic").then((res) => {
      console.log(res)
    })
  }
  getAlcoholic = () => {
    axios.get("www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic").then((res) => {
      console.log(res)
    })
  }



  render() {
    // const drinkResults = this.drinkNameArray;
    return (
        <div className="container">
          <h1 className="header">Random Cocktail Generator</h1>
          <div>
          <InputGroup className="mb-3 ">
        <Form.Control 
        aria-label="Text input with dropdown button" 
        value={this.state.inputValue}
         onChange={this.handleTextChange} 
         onKeyPress={this.handleKeyPress}
         
         />
    
        <SplitButton
          variant="outline-secondary"
          title="Search"
          id="input-group-dropdown-2"
          align="end"
          onClick={this.getFullDrinkList}
        >
          <Dropdown.Item href="#" id="byName" onClick={this.handleSearchTypeChange}>Search By Name</Dropdown.Item>
          <Dropdown.Item href="#" id="byAlcoholic" onClick={this.handleSearchTypeChange}>Search Alcoholic Drinks</Dropdown.Item>
          <Dropdown.Item href="#" id="byNonAlcoholic" onClick={this.handleSearchTypeChange}>Search Non Alcoholic Drinks</Dropdown.Item>
          
        </SplitButton>
      </InputGroup>
          {/* Randomized cocktail Start*/}
      <Button
            variant="primary"
            className="surpriseButton"
            onClick={this.getDrink}
          >
            Surprise me!
          </Button>

          {/* Randomized cocktail End*/}


          </div>
          {this.state.combinedResults ? (
            this.state.combinedResults.map((results) => (
              <div className="drinkCards">
                <Card
                key={results.idDrink}
                  style={{
                    width: "16rem",
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
            // onClick={this.searchByDrinkId(results)}
          >
            See Full Recipe
          </Button> 
                  </Card.Body>
                </Card>

                <Modal show={this.displayModal} onHide={this.hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.hideModal}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>

              </div>
            )) 
            

          ) : (
      <h3 className="header">{this.state.noResults} No Results Found </h3>            
          )}


          <div>
          <p>{this.drinkResults}</p> 

          </div>
          
       {/* <ul>
        {this.drinkNameArray.map((item) => (
          <a>{item}</a>
        ))}
       </ul> */}


          {this.state.clickedButton ? (
            <div className="drinkCards">
              <Row xs={1} md={1} lg={1} xl={3}>
                <Card
                  style={{
                    width: "16rem",
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
                    width: "16rem",
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
                    width: "16rem",
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
          ) : (
            ""
          )}
        </div>
    );
  }
}

export default Cocktail;
