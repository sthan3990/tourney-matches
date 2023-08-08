// MatchList.js

import React from "react"; //optional
import Match from "./Match";
import matchData from "../data/matchData";

function MatchList(props) {

  const oneMatch = matchData[0];

  return (
    <section className="PlayerList MatchList">
      <h1>Math list</h1>
      <Match 
      players={oneMatch.players}
      winners={oneMatch.winner}
      scoreDifference={oneMatch.scoreDifference}
      />
    </section>
  );
}

export default MatchList;
