import React from "react";
import State from "../State";
import "./index.scss";
function StateList() {
  return (
    <div className="state-list">
      <State time={"08/03/2023"} state="success" title={"Pending"} />
      <State time={"08/03/2023"} state="on-progress" title={"Accept"} />
      <State state="not-yet" title={"Delivery"} />
      <State state="not-yet" title={"Done"} />
      <State state="not-yet" title={"Deny"} />
    </div>
  );
}

export default StateList;
