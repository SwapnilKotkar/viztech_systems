import React from "react";
import AppliedCandidates from "./AppliedCandidates";
import ApprovedCandidates from "./ApprovedCandidates";
import Jobs from "./Jobs";

const View = ({val, jobsData}) => {
  switch (val) {
    case "Jobs":
      return (
        <>
          <Jobs jobsData={jobsData} />
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
      return <Jobs jobsData={jobsData}/>;
  }
};

export default View;
