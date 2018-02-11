import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { getData } from './utils/api';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

// A simple example test
describe('get some star wars data', () => {
	it('should load star wars data', () => {
		return getData('luke skywalker').then(data => {
			expect(data).toBeDefined();
			expect(data.results[0].name).toEqual('Luke Skywalker');
		});
	});
});
