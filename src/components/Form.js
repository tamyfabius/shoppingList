import React from 'react';
import '../style.css';

class Form extends React.Component {
    state = {
        name: '',
        quantity: 0
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.addArticle(this.state);
        this.setState({name:'', quantity: 0});
    };

    render(){
        return (
            <div>
                <h1>{this.props.titleForm}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="number"
                           className="quantity"
                           placeholder="quantité"
                           value= {this.state.quantity}
                           onChange={(event) => this.setState({quantity: event.target.value})} />
                    <input type="text"
                           placeholder="name"
                           value= {this.state.name}
                           onChange={(event)=> this.setState({name: event.target.value})} />
                    <button type="submit" className="btn btn-success">Ajouter</button>
                </form>
            </div>
        );
    }
}

export default Form;