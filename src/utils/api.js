const ENDPOINT = 'https://swapi.co/api/people/';

export async function getData(value) {
	return await fetch(`${ENDPOINT}?search=${value}`).then(data => data.json());
}
