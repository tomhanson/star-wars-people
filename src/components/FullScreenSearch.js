import React, { Component } from 'react';

class FullScreenSearch extends Component {
	constructor(props) {
		super(props);
		this.toggleFullScreen = this.toggleFullScreen.bind(this);
		this.state = {
			value: '',
			fullScreen: false,
		};
	}
	handleChange(event) {
		//destructure the value for ease
		const { value } = event.target;
		//set the state for controlled component
		this.setState((prevState, props) => {
			return {
				value: value,
			};
		});
		this.props.fetch(value);
	}
	toggleFullScreen() {
		this.setState((prevState, props) => {
			return {
				fullScreen: !this.state.fullScreen,
			};
		});
	}
	render() {
		return (
			<div className={this.state.fullScreen ? 'full-screen-search true' : 'full-screen-search false'}>
				<input
					onFocus={this.toggleFullScreen}
					onBlur={this.toggleFullScreen}
					value={this.state.value}
					onChange={this.handleChange.bind(this)}
				/>
			</div>
		);
	}
}

export default FullScreenSearch;
