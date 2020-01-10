import React from 'react';
import {Card, Row, Column, Description, FullName, Meta} from "./styledComponents";

const RepoCard = ({ item, handleClick, meta }) => {
	return (
		<Card onClick={() => !meta && handleClick(item.id)}>
			<Row>
				<Column>
					<FullName>{item.full_name}</FullName>
					<Description>{item.description}</Description>
				</Column>
				<Column>
					<div>★ {item.stargazers_count}</div>
					<div>! {item.open_issues}</div>
					<div>{item.score}</div>
				</Column>
			</Row>
			{ meta &&
				<Meta>
					<div>Issues: {meta.issues_url}</div>
					<div>Pull requests: {meta.pulls_url}</div>
					{ meta.license && <div>License: {meta.license.key}</div> }
				</Meta>
			}
		</Card>
	)
}

export default RepoCard;
