import React from 'react';
import { useParams } from 'react-router-dom';
import RepoCard from "../RepoCard/RepoCard";

const Repository = () => {
	const [ repo, setRepo ] = React.useState({});
	const [ meta, setMeta ] = React.useState({});
	const [ error, setError ] = React.useState('');
	const { id } = useParams();

	React.useEffect(() => {
		function fetchData() {
			fetch(`https://api.github.com/repositories/${id}`)
				.then(response => {
					return response.json();
				})
				.then(repo => {
					if (repo.message) {
						setError(repo.message);
						return;
					}
					const {
						id, full_name, description, stargazers_count, open_issues, score,
						issues_url, pulls_url, license
					} = repo;

					setRepo({
						id, full_name, description, stargazers_count, open_issues, score
					});

					setMeta({
						issues_url, pulls_url, license
					});
				})
				.catch(error => {
					setError(error.message);
				})
		}
		fetchData();
	}, []);

	if (error) {
		return (
			<h1>Error: {error}</h1>
		);
	}

	return (
		<main>
			{ !repo.id && <div>Loading...</div> }
			{ repo.id &&
				<RepoCard
					item={repo}
					meta={meta}
				/>
			}

		</main>
	);
}

export default Repository;
