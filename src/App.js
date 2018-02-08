import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getData } from './utils/api';

class App extends Component {
	constructor(props) {
		super(props);
		this.fetchPeople = this.fetchPeople.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			personValue: '',
		};
	}
	handleChange(value) {
		this.setState((prevState, props) => {
			return {
				personValue: value,
			};
		});
	}
	fetchPeople(e) {
		const { value } = e.target;
		this.handleChange(value);
		getData(value);
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<input value={this.state.personValue} onChange={this.fetchPeople} />
			</div>
		);
	}
}

export default App;
