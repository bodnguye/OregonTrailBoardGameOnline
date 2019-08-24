/* eslint-disable default-case */
import miscCards from "../decks/misc_cards"
import calamityDeck from "../decks/calamity_deck"

const deckReducer = (state = {
    trailDeck: [],
    supplyDeck: [],
    trailHand: [],
    supplyHand: [],
    calamityDeck: [],
    miscCards: [],
    activeTrail: [miscCards[2], miscCards[2], miscCards[2], miscCards[2], miscCards[2]],
    activeCalamity: [calamityDeck[0]]
}, action) => {
    switch (action.type) {
        case "DEAL_DECK":
            state = {
                ...state,
                trailDeck: action.trailDeck,
                supplyDeck: action.supplyDeck,
                trailHand: action.trailHand,
                supplyHand: action.supplyHand,
            }
            break;
        case "TRAIL_CLICK":
            state = {
                ...state,
                activeTrail: action.activeTrail,
                trailHand: action.trailHand,
            };
            break;
        case "DRAW_CALAMITY":
        state = {
            ...state,
            activeCalamity: action.activeCalamity
        };
    }
    return state;
};

export default deckReducer;