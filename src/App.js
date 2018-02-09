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
				<header className="App-header">
					<h1 className="App-title">People finder</h1>
				</header>
				<div className="App__content">
					<span className="input input--jiro">
						<input
							className="input__field input__field--jiro"
							type="text"
							id="input-10"
							value={this.state.personValue}
							onChange={this.fetchPeople}
						/>
						<label className="input__label input__label--jiro" htmlFor="input-10">
							<span className="input__label-content input__label-content--jiro">Cat's Name</span>
						</label>
					</span>

					<ul>
						{this.state.people.map((person, i) => {
							return <CompletionOption key={i} name={person.name} />;
						})}
					</ul>
				</div>
			</div>
		);
	}
}

export default App;
