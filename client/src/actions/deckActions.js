export const dealDeck = (trailDeck, supplyDeck, calamityDeck, miscCards, trailHand, supplyHand) => {

    const newTrailDeck = trailDeck;
    const newSupplyDeck = supplyDeck;
    const newCalamityDeck = calamityDeck;
    const newTrailHand = trailHand;
    const newSupplyHand = supplyHand;
    const newMiscCards = miscCards;
    
    while (newTrailHand.length < 5) {
      // Deal 5 Trail cards to Player Hand
      // Removes 5 Trail cards from top of the Deck
      newTrailHand.push(newTrailDeck.shift());
      }

      console.log(newTrailDeck);
      console.log(newTrailHand);

    while (newSupplyHand.length < 8) {
      // Deal 8 Supply cards to Player Hand
      // Removes 8 Supply cards from top of the Deck
      newSupplyHand.push(newSupplyDeck.shift());
      }

    console.log(newSupplyDeck);
    console.log(newSupplyHand);

    // update the state variables accordingly
    return{
        type: "DEAL_DECK",
        trailDeck: newTrailDeck,
        trailHand : newTrailHand,
        supplyDeck: newSupplyDeck,
        supplyHand : newSupplyHand,
        calamityDeck: newCalamityDeck,
        miscCards: newMiscCards
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
      activeTrail.push(pickedCard);
     console.log(activeTrail);

     // update the state variables accordingly
    return{
      type: "TRAIL_CLICK",
      trailHand : newTrailHand,
      activeTrail: activeTrail
    }
    }
  };