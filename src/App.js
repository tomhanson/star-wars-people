import React, { Component } from 'react';
import './App.css';
import { getData } from './utils/api';
import Header from './components/Header';
import CompletionOption from './components/CompletionOption';

class App extends Component {
	constructor(props) {
		super(props);
		this.fetchPeople = this.fetchPeople.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.scrollSelections = this.scrollSelections.bind(this);
		this.state = {
			personValue: '',
			people: [],
			selected: -1,
		};
	}

	handleChange(value) {
		this.setState((prevState, props) => {
			return {
				personValue: value,
				selected: 0,
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

	scrollSelections(e) {
		//38 up 40 down
		if (this.state.personValue !== '') {
			if (e.which === 38) {
				console.log(this.state.personValue);
				let value = this.state.selected !== 0 ? this.state.selected - 1 : this.state.people.length - 1;
				this.setState((prevState, props) => {
					return {
						selected: value,
						personValue: this.state.people[value].name,
					};
				});
			} else if (e.which === 40) {
				let value = this.state.selected !== this.state.people.length - 1 ? this.state.selected + 1 : 0;
				this.setState((prevState, props) => {
					return {
						selected: value,
						personValue: this.state.people[value].name,
					};
				});
			}
		}
	}

	fetchPeople(e) {
		const { value } = e.target;
		this.handleChange(value);
		getData(value).then(response => {
			this.updatePeopleArray(response.results);
		});
	}
	componentDidMount() {
		const audio = document.querySelector('audio');
		audio.play();
	}
	render() {
		return (
			<div className="App">
				<Header />
				<div className="App__content">
					<div className="App__search">
						<input
							autoComplete="off"
							className="search__field"
							type="text"
							id="input-10"
							placeholder="Search for your favourite character here"
							value={this.state.personValue}
							onChange={this.fetchPeople}
							onFocus={this.fetchPeople}
						/>
					</div>
					<div className="App__results">
						<ul className="search__results">
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
