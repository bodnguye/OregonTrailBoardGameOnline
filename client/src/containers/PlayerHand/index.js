import React, { Component } from "react";
import TrailCard from "../../components/TrailCard";
import { Col, Row, Container } from "../../components/Grid";
import { connect } from "react-redux";

import { dealDeck } from "../../actions/deckActions";
import { trailClick } from "../../actions/deckActions";

import trailDeck from "../../decks/trail_deck";
import supplyDeck from "../../decks/supply_deck";
import calamityDeck from "../../decks/calamity_deck";
import miscCards from "../../decks/misc_cards";
import shuffle from "shuffle-array";
import './style.css';

// Shuffles Trails Deck at the Beginning of the Game
shuffle(trailDeck);
shuffle(supplyDeck);
shuffle(calamityDeck);

const trailHand = [];
const supplyHand = [];
const activeTrail = [];

class PlayerHand extends Component {
  
  render() {
    return (
      <Container>
        <button onClick={() => this.props.dealDeck(trailDeck, supplyDeck, calamityDeck, miscCards, trailHand, supplyHand)}>Start Trail</button>
        <div className="hand">
          <Row>
            {this.props.deck.trailHand.map(trailCard => (
              <Col size="md-1 sm-6">
                <TrailCard
                  key={trailCard.id}
                  handleClick={(id) => this.props.trailClick(id, trailHand, activeTrail)}
                  id={trailCard.id}
                  image={trailCard.image}
                />
              </Col>
            ))}
          </Row>
        </div>

        <div className="hand">
          <Row>
            {this.props.deck.supplyHand.map(supplyCard => (
              <Col size="md-1 sm-6">
                <TrailCard
                  key={supplyCard.id}
                  handleClick={this.handleClick}
                  id={supplyCard.id}
                  image={supplyCard.image}
                />
              </Col>
            ))}
          </Row>
        </div>
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
    dealDeck: (trailDeck, supplyDeck, calamityDeck, miscCards, trailHand, supplyHand) => {
      dispatch(dealDeck(trailDeck, supplyDeck, calamityDeck, miscCards, trailHand, supplyHand));
    },

    trailClick: (id, supplyHand, activeTrail) => {
      dispatch(trailClick(id, supplyHand, activeTrail));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerHand);
