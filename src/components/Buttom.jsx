import React from 'react';

// Componente Statefull
class Button extends React.Component {
	state = {
		count: 0,
	}

	handleClick = () => {
		this.setState({
			count: this.state.count + 1,
		})
	}

	render() {
		const { count } = this.state;
		return(
			<div>
				<h1>Libros 📚: {count}</h1>
				<button type="button" onClick={this.handleClick}>Add a book to your cart!</button>
			</div>
		)
	}
}

export default Button;