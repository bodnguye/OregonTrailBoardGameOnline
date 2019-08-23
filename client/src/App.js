import React from "react";
import TicTacToe from "./containers/TicTacToe";
import PlayerHand from "./containers/PlayerHand";
import OregonnTrail from "./containers/OregonTrail"

function App() {
  return (
    <div>
        {/* <TicTacToe /> */}
        <OregonnTrail />
        <PlayerHand />
    </div>     
  );
}

export default App;
