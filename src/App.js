import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getData } from './utils/api';
import OpeningCrawl from './components/openingCrawl';

class App extends Component {
	constructor(props) {
		super(props);
		this.fetchPeople = this.fetchPeople.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			personValue: '',
			people: [],
		};
	}

	handleChange(value) {
		this.setState((prevState, props) => {
			return {
				personValue: value,
			};
		});
	}

	updatePeopleArray(people) {
		this.setState((prevState, props) => {
			return {
				people: people,
			};
		});
	}

	fetchPeople(e) {
		const { value } = e.target;
		this.handleChange(value);
		getData(value).then(response => {
			this.updatePeopleArray(response.results);
		});
	}

	render() {
		return (
			<div className="App">
			<OpeningCrawl />
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<input value={this.state.personValue} onChange={this.fetchPeople} />
				{this.state.people.map((person, i) => {
					return <div key={i}>{person.name}</div>;
				})}
			</div>
		);
	}
}

export default App;
