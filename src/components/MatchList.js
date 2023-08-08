// MatchList.js

import React from "react"; //optional
import Match from "./Match";
import matchData from "../data/matchData";

function MatchList(props) {
  return (
    <section className="PlayerList MatchList">
      <h1>Math list</h1>
      <Match />
    </section>
  );
}

export default MatchList;
