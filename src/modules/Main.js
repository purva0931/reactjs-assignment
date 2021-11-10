import React from "react";

const Main = ({ players }) => {
  return (
    <>
      <div>
        {Array.isArray(players) &&
          players.map((player, id) => <p key={player + id}>{player}</p>)}
      </div>
    </>
  );
};

export default Main;
