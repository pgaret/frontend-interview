import React from 'react';
import { useHistory } from 'react-router-dom';
import { getRepositoryRoute } from "../../constants/routes";
import RepoCard from "../RepoCard/RepoCard";
import { ScrollBox } from "./styledComponents";

const SearchResultList = ({ searchResults }) => {
	const history = useHistory();

	function goToRepo(id) {
		history.push(getRepositoryRoute(id))
	}

	return (
		<React.Fragment>
			<h1>Github Repository Search Results:</h1>
			{ searchResults.length > 0 ?
				<ScrollBox>
					{ searchResults.map(item => <RepoCard key={item.id} item={item} handleClick={goToRepo}/>)}
				</ScrollBox> :
				<h2>No results were found for that query</h2>
			}

		</React.Fragment>

	)
}

export default SearchResultList;
