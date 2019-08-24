import miscCards from "../decks/misc_cards"
import calamityDeck from "../decks/calamity_deck"
 const initialActive= [miscCards[2],miscCards[2],miscCards[2],miscCards[2],miscCards[2]];
 const drawCalamity = calamityDeck[0];

export const dealDeck = (trailDeck, supplyDeck, calamityDeck, miscCards, trailHand, supplyHand) => {
    
    while (trailHand.length < 5) {
      // Deal 5 Trail cards to Player Hand
      // Removes 5 Trail cards from top of the Deck
      trailHand.push(trailDeck.shift());
      }

      console.log(trailDeck);
      console.log(trailHand);

    while (supplyHand.length < 8) {
      // Deal 8 Supply cards to Player Hand
      // Removes 8 Supply cards from top of the Deck
      supplyHand.push(supplyDeck.shift());
      }

    console.log(supplyDeck);
    console.log(supplyHand);

    // update the state variables accordingly
    return{
        type: "DEAL_DECK",
        trailDeck: trailDeck,
        trailHand : trailHand,
        supplyDeck: supplyDeck,
        supplyHand : supplyHand,
        calamityDeck: calamityDeck,
        miscCards: miscCards,
    }
  };  
 

export const trailClick = (id, trailHand, activeTrail) => {
    
  // filters the chosen Trail Card
  const pickedCard = trailHand.filter(card => card.id === id);
  
  // Create a new array for newTrailHAnd
  const newTrailHand = trailHand.filter(card => card.id !== id);
  console.log(newTrailHand)
  
  // Create an array with the clicked TrailCard
    if (!activeTrail.length) {
      initialActive.shift();
      initialActive.push(pickedCard[0]);
     console.log(initialActive);

     // update the state variables accordingly
    return{
      type: "TRAIL_CLICK",
      trailHand : newTrailHand,
      activeTrail: initialActive,
    }
    }
  };

 