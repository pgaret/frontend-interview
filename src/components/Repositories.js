import * as React from "react";
import SearchResultList from "./SearchResultList/SearchResultList";

/**
 * Once given an input, fetch the repositories we searched
 * via:
 *
 * https://api.github.com/search/repositories?q={}
 *
 * This should not kickoff a fetch for every keystroke, but rather when
 * typing stops.
 *
 * Documentation for the search api is here:
 * https://developer.github.com/v3/search/#search-repositories
 */

const Repositories = () => {
  const [ searchResults, setSearchResults ] = React.useState('');
  const [ query, setQuery ] = React.useState('');
  const [ typingTimer, setTypingTimer ] = React.useState();
  const [ error, setError ] = React.useState('');
  const waitToQuery = 250;

  function queryGithub() {
      fetch(`https://api.github.com/search/repositories?q=${query}`)
          .then((response) => {
              return response.json();
          })
          .then((json) => {
              if (json.message) {
                  setError(json.message);
                  setSearchResults([]);
                  return;
              }

              setSearchResults(json.items.map(item => {
                  const { full_name, description, stargazers_count, open_issues, score, id } = item;
                  return {
                      full_name, description, stargazers_count, open_issues, score, id
                  }
              }));
          })
  }

    function updateSearch(e) {
      setQuery(e.target.value);
      clearTimeout(typingTimer);
      setTypingTimer(setTimeout(queryGithub, waitToQuery));
    }

  return (
    <main>
        { error && <p>Encountered an error: {error}</p>}
        <input name="search-terms" value={query} onChange={updateSearch} />
      {searchResults ? (
        <SearchResultList searchResults={searchResults} />
      ) : (
        <div>Enter some test to search github repositories</div>
      )}
    </main>
  );
};

export default Repositories;
