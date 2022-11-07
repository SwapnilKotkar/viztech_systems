import React from "react";
import AppliedCandidates from "./AppliedCandidates";
import ApprovedCandidates from "./ApprovedCandidates";
import Jobs from "./Jobs";

const View = ({val, jobs}) => {
  switch (val) {
    case "Jobs":
      return (
        <>
          <Jobs jobs={jobs} />
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
      return <Jobs jobs={jobs}/>;
  }
};

export default View;
