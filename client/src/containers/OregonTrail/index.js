import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { connect } from "react-redux";

import { dealDeck } from "../../actions/deckActions";

import miscCards from "../../decks/misc_cards";
import calamityDeck from "../../decks/calamity_deck";
import "./style.css";

const activeCalamity = [miscCards[4]];

const Start = props => (
    <div
        className="start-card"
        value={props.id}
    >
        <div className="start-img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
)

const End = props => (
    <div
        className="end-card"
        value={props.id}
    >
        <div className="end-img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
)

const Trails = props => (
    <div
        className="trail-card"
        value={props.id}
    >
        <div className="trail-img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
)

const Decks = props => (
    <div
        className="deck-card"
        value={props.id}
    >
        <div className="deck-img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
)

const ActiveCalamity = props => (
    <div
        className="activecalamity-card"
        value={props.id}
    >
        <div className="activecalamity-img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
)

class OregonTrail extends Component {
    render() {
        return (
            <div className="oregontrail">
                <Container>
                    <Row >
                    <Col size="med-1 sm-1">
                            <Decks
                                key={miscCards[5].id}
                                value={miscCards[5].id}
                                image={miscCards[5].image}
                            />
                        </Col>
                        
                        <Col size="med-1 sm-1">
                            <Decks
                                key={miscCards[3].id}
                                value={miscCards[3].id}
                                image={miscCards[3].image}
                            />
                        </Col>

                        <Col size="med-6 sm-7">
                            <Start
                                key={miscCards[0].id}
                                value={miscCards[0].id}
                                image={miscCards[0].image}
                            />
                        </Col>
                        
                    </Row>

                    <Row >
                        {this.props.deck.activeTrail.map(trail => (
                            <Col size="md-2 sm-6">
                                <Trails
                                    key={trail.id}
                                    value={trail.id}
                                    image={trail.active}
                                />
                            </Col>
                        ))}
                    </Row>

                    <Row>
                    <Col size="med-1 sm-1">
                            <Decks
                                key={miscCards[4].id}
                                value={miscCards[4].id}
                                image={miscCards[4].image}
                            />
                        </Col>

                        {activeCalamity.map(calamity => (
                        <Col size="med-1 sm-2">
                            <ActiveCalamity
                                key={calamity.id}
                                value={calamity.id}
                                image={calamity.image}
                            />
                        </Col>
                        ))}
                        
                        <Col size="med-12 sm-7">
                            <End
                                key={miscCards[1].id}
                                value={miscCards[1].id}
                                image={miscCards[1].image}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
};


const mapStateToProps = (state) => {
    return {
        deck: state.deck,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
     
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OregonTrail);
