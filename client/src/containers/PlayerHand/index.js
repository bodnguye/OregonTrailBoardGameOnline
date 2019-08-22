import React, { Component } from "react";
import shuffle from 'shuffle-array';
import TrailCard from "../../components/TrailCard";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Column from "../../components/Column";
import trailDeck from "../../decks/trail_deck";
import supplyDeck from "../../decks/supply_deck";

// Random shuffle
function randomFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Shuffles Trails Deck at the Beginning of he Game
shuffle(trailDeck); 
shuffle(supplyDeck);
console.log(trailDeck);
console.log(supplyDeck);

class PlayerHand extends Component {
  // Set this.state
  state = {
    trailDeck,
    supplyDeck,
    playerTrailHand: [],
    playerSupplyHand: [],
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      correctIncorrect: "You guessed correctly!"
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ correctIncorrect: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      correctIncorrect: "You guessed incorrectly!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledFriends = randomFriends(trailDeck);
    this.setState({ trailDeck: shuffledFriends });
  };

  handleDealDeck = () => {
    const newTrailDeck = this.state.trailDeck;
    const newTrailHand = this.state.playerTrailHand;
    const newSupplyDeck = this.state.supplyDeck;
    const newSupplyHand = this.state.playerSupplyHand;

    while (newTrailHand.length < 5) {
      // Deal 5 Trail cards to Player Hand
      newTrailHand.push(newTrailDeck.pop());
      }

    // Removes 5 Trail cards from top of the Deck
    newTrailDeck.splice(0,5);

      console.log(newTrailDeck);
      console.log(newTrailHand);

    while (newSupplyHand.length < 7) {
      // Deal 7 Supply cards to Player Hand
      newSupplyHand.push(newSupplyDeck.pop());
      }

    // Removes 7 Supply cards from top of the Deck
    newSupplyDeck.splice(0,7);

    console.log(newSupplyDeck);
    console.log(newSupplyHand);

    // update the state variables accordingly
    this.setState({
      trailDeck: newTrailDeck,
      playerTrailHand : newTrailHand,
      supplyDeck: newSupplyDeck,
      playerSupplyHand : newSupplyHand,
    });
  };  

  render() {
    return (
        <Container>
        <button onClick={this.handleDealDeck}>Start Game</button>
          <Row>
            {this.state.playerTrailHand.map(trailCard => (
              <Column size="md-1 sm-6">
                <TrailCard
                  key={trailCard.id}
                  handleClick={this.handleClick}
                  id={trailCard.id}
                  image={trailCard.image}
                />
              </Column>
            ))}
          </Row>
          <Row>
            {this.state.playerSupplyHand.map(supplyCard => (
              <Column size="md-1 sm-6">
                <TrailCard
                  key={supplyCard.id}
                  handleClick={this.handleClick}
                  id={supplyCard.id}
                  image={supplyCard.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
    );
  }
}

export default PlayerHand;