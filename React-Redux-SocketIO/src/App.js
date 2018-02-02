import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

import { initialize } from './Actions/SocketIO'

class App extends Component {
	componentDidMount(){
		initialize();
	}

	handleClick = (event) => {

	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React {this.props.userInfo.firstName} {this.props.userInfo.lastName}</h1>
				</header>
				<div>
					<button onClick={this.handleClick}>Click Me</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		userInfo: state.UserInfo,
	}
}

export default connect(mapStateToProps)(App);
