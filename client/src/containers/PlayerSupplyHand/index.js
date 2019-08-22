import React, { Component } from "react";
import shuffle from 'shuffle-array';
import TrailCard from "../../components/TrailCard";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Column from "../../components/Column";
import trailDeck from "../../decks/supply_deck";

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
console.log(trailDeck);

class PlayerSupplyHand extends Component {
  // Set this.state
  state = {
    trailDeck,
    playerTrailHand: [],
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

  render() {
    return (
        <Container>
          <Row>
            {this.state.trailDeck.slice(0,7).map(trailCard => (
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
        </Container>
    );
  }
}

export default PlayerSupplyHand;