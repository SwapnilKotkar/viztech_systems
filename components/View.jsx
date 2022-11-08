import React from "react";
import AppliedCandidates from "./AppliedCandidates";
import ApprovedCandidates from "./ApprovedCandidates";
import Jobs from "./Jobs";

const View = ({val, setCurrentId, setShow}) => {
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

    case "Approved Candidates":
      return (
        <>
          <ApprovedCandidates />
        </>
      );

    default:
      return <Jobs setCurrentId={setCurrentId} setShow={setShow} />;
  }
};

export default View;
