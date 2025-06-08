import React from 'react';

export default class ReactComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button
					onClick={() =>
						this.setState({ count: this.state.count + 1 })
					}
				>
					Increment
				</button>
			</div>
		);
	}
}
