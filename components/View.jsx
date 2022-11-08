import React from "react";
import AppliedCandidates from "./AppliedCandidates";
import Jobs from "./Jobs";

const View = ({ val, setCurrentId, setShow }) => {
  switch (val) {
    case "Jobs":
      return (
        <>
          <Jobs setCurrentId={setCurrentId} setShow={setShow} />
        </>
      );

    case "Applied Candidates":
      return (
        <>
          <AppliedCandidates />
        </>
      );

    default:
      return <Jobs setCurrentId={setCurrentId} setShow={setShow} />;
  }
};

export default View;
