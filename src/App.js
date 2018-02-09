import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getData } from './utils/api';
import Logo from './components/Logo';
import CompletionOption from './components/CompletionOption';

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
		let value;
		this.state.personValue === '' ? (value = []) : (value = people);
		this.setState((prevState, props) => {
			return {
				people: value,
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
				<header className="App-header">
					<Logo />
					<h1 className="App-title">People finder</h1>
				</header>
				<div className="App__content">
					<div className="App__search">
						<input
							className="search__field"
							type="text"
							id="input-10"
							placeholder="Search for your favourite character here"
							value={this.state.personValue}
							onChange={this.fetchPeople}
						/>
					</div>

					<div className="App__results">
						<ul class="search__results">
							{this.state.people.map((person, i) => {
								return <CompletionOption key={i} person={person} />;
							})}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
