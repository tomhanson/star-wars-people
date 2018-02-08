const API = 'https://swapi.co/api/people/';

export async function getData(value) {
	return await fetch(`${API}?search=${value}`).then(data => data.json());
	// return response;
}
