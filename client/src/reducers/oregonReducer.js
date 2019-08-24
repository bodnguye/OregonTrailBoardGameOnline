/* eslint-disable default-case */

const deckReducer = (state = {
    trailDeck: [],
    supplyDeck: [],
    trailHand: [],
    supplyHand: [],
    calamityDeck: [],
    miscCards: [],
    clicked: [],
}, action) => {
    switch (action.type) {
        case "DEAL_DECK":
            state = {
                ...state,
                trailDeck: action.trailDeck,
                supplyDeck: action.supplyDeck,
                trailHand: action.trailHand,
                supplyHand: action.supplyHand
            }
            break;
        case "CLICK":
            state = {
                ...state,
                age: action.payload
            };
            break;
    }
    return state;
};

export default deckReducer;