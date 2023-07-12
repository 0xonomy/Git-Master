"use client";

import ResultsMapper from "/components/ResultsMapper";

const Results = () => {
  if (typeof window !== "undefined") {
    const data = JSON.parse(sessionStorage.getItem("data"));
    const type = JSON.parse(sessionStorage.getItem("type"));

    // if (typeof window !== "undefined") {
    return (
      <div className="result-container">
        <ResultsMapper data={data} type={type} />
      </div>
    );
    // }
  }
  console.log("This part is ment for browser view")
};

export default Results;
