import React, { Component } from "react";

import TrailCard from "../../components/TrailCard";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Column from "../../components/Column";
import {connect} from "react-redux";
import { dealDeck } from "../../actions/deckActions";
import trailDeck from "../../decks/trail_deck"
import supplyDeck from "../../decks/supply_deck"
import shuffle from "shuffle-array"

// Shuffles Trails Deck at the Beginning of he Game
shuffle(trailDeck); 
shuffle(supplyDeck);
console.log(trailDeck);
console.log(supplyDeck);

// Random shuffle
function randomFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class PlayerHand extends Component {

  handleClick = id => {
    if (id) {
      alert("TESTING");
    }
  };

  render() {
    return (
        <Container>
        <button onClick={() => this.props.dealDeck(trailDeck, supplyDeck)}>Start Game</button>
          <Row>
            {this.props.deck.trailHand.map(trailCard => (
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
            {this.props.deck.supplyHand.map(supplyCard => (
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

const mapStateToProps = (state) => {
  return {
      deck: state.deck,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dealDeck: (trailDeck, supplyDeck) => {
            dispatch(dealDeck(trailDeck, supplyDeck));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerHand);
