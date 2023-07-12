const fetchQuery = async (query, queryType) => {
  const userUrl = "https://api.github.com/search/users?per_page=100&q=";
  const repoUrl = "https://api.github.com/search/repositories?per_page=100&q=";
  console.log(`query is: ${query}`);
  console.log(`query type is: ${queryType}`);
  const fetchUrl = (queryType === "user" ? userUrl : repoUrl) + query;
  console.log(fetchUrl);
  const res = await fetch(fetchUrl);
  return res.json();
};

export default fetchQuery;
