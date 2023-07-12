import dynamic from "next/dynamic";

const ResultRepo = dynamic(() => import("./ResultRepo"), {
  ssr: false,
});
const ResultUser = dynamic(() => import("./ResultUser"), {
  ssr: false,
});

const ResultsMapper = ({ data, type }) => {
  if (type === "user") {
    return (
      <>
        {data.items.map((result) => (
          <ResultUser key={result.id} result={result} />
        ))}
      </>
    );
  } else {
    return (
      <>
        {data.items.map((result) => (
          <ResultRepo key={result.id} result={result} />
        ))}
      </>
    );
  }
};

export default ResultsMapper;
