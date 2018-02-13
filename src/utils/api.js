//variable to hold the endpoint base
const ENDPOINT = 'https://swapi.co/api/people/';

export async function getData(value) {
	//fetch then turn to json and return
	return await fetch(`${ENDPOINT}?search=${value}`).then(data => data.json());
}
