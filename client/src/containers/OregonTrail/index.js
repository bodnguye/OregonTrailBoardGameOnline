import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { connect } from "react-redux";
import miscCards from "../../decks/misc_cards";
import "./style.css";

const behindtrail = [miscCards[2], miscCards[2], miscCards[2], miscCards[2], miscCards[2]];

const StartEnd = props => (
    <div
        className="startend-card"
        value={props.id}
    >
        <div className="startend-img-container">
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

class OregonTrail extends Component {
    render() {
        return (
            <div className="oregontrail">
            <Container>
                <Row >
                    <Col size="med-12 sm-12">
                        <StartEnd
                            key={miscCards[0].id}
                            value={miscCards[0].id}
                            image={miscCards[0].image}
                        />
                    </Col>
                </Row>
                <Row >
                    {behindtrail.map(trail => (
                        <Col size="md-2 sm-6">
                            <Trails
                                key={trail.id}
                                id={trail.id}
                                image={trail.image}
                            />
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col size="med-12 sm-12">
                        <StartEnd
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
