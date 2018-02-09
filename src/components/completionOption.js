import React from 'react';

const CompletionOption = props => {
	const {
		name,
		height,
		mass,
		hair_color: hair,
		skin_color: skin,
		eye_color: eyes,
		birth_year,
		gender,
	} = props.person;
	return (
		<li className="search__result">
			<table>
				<tr>
					<td>Name</td>
					<td>{name}</td>
				</tr>
				<tr>
					<td>Height</td>
					<td>{height}</td>
				</tr>
				<tr>
					<td>Weight</td>
					<td>{mass}</td>
				</tr>
				<tr>
					<td>Hair Colour</td>
					<td>{hair}</td>
				</tr>
				<tr>
					<td>Skin Colour</td>
					<td>{skin}</td>
				</tr>
				<tr>
					<td>Eye Colour</td>
					<td>{eyes}</td>
				</tr>
				<tr>
					<td>Year of Birth</td>
					<td>{birth_year}</td>
				</tr>
				<tr>
					<td>Gender</td>
					<td>{gender}</td>
				</tr>
			</table>
		</li>
	);
};

export default CompletionOption;
