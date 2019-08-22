import React from "react";
import TicTacToe from "./containers/TicTacToe";
import PlayerTrailHand from "./containers/PlayerTrailHand";
import PlayerSupplyHand from "./containers/PlayerSupplyHand";

function App() {
  return (
    <div>
        {/* <TicTacToe /> */}
        <PlayerTrailHand />
        <PlayerSupplyHand />
    </div>     
  );
}

export default App;
