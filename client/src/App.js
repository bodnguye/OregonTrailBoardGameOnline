import React from "react";
import TicTacToe from "./containers/TicTacToe";
import PlayerHand from "./containers/PlayerHand";
import OregonnTrail from "./containers/OregonTrail"

function App() {
  return (
    <div>
        <OregonnTrail />
        <PlayerHand />
        <TicTacToe />
    </div>     
  );
}

export default App;
