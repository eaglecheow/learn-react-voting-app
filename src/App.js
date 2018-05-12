import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './js/data';

class App extends Component {
    render() {
        return (
            <ProductList/>
        );
    }
}

class ProductList extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        products: []
    };

    componentDidMount() {
        this.setState({products: Products});
    }

    render() {
        let products = this.state.products.sort((a, b) => (b.votes - a.votes));
        const productComponents = products.map((data) => (
            <Product key={"product-" + data.id}
                     id={data.id}
                     title={data.title}
                     description={data.detail}
                     image_uri={data.image_uri}
                     vote_count={data.votes}
                     submit_username={data.submitter_username}
                     onVote={this.handleProductUpvote}
                     onDownVote={this.handleProductDownVote}/>
        ));
        return productComponents;
    }

    handleProductUpvote = (productId) => {
        const newProducts = this.state.products.map((product) => {
            if (product.id === productId) {
                return Object.assign({}, product, {
                    votes: product.votes + 1
                });
            }
            else {
                return product;
            }
        });

        this.setState({products: newProducts});
    }

    handleProductDownVote = (productId) => {
        const newProducts = this.state.products.map((product) => {
            if (product.id === productId) {
                return Object.assign({}, product, {
                    votes: product.votes - 1
                });
            }
            else {
                return product;
            }
        });

        this.setState({products: newProducts});
    }
}

class Product extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid product">
                <div className="row middle-xs center-xs start-md">
                    <div className="col-md-3 product-image">
                        <img className="img-responsive" alt="Product" src={this.props.image_uri}/>
                    </div>
                    <div className="col-md-8">
                        <div className="product-description">
                            <h2>{this.props.title}</h2>
                            <p>{this.props.description}</p>
                        </div>
                        <div>
                            Current Votes : {this.props.vote_count} <br/>
                            <div className="btn-group">
                                <button className="btn btn-primary" onClick={this.handleOnVote}><i className="far fa-thumbs-up"></i> Yay!</button>
                                <button className="btn btn-danger" onClick={this.handleOnDownVote}><i className="far fa-thumbs-down"></i> Nay!</button>
                            </div>
                        </div>
                        <div className="user-info bottom">
                            <span>Submitted by: </span>
                            <img className="user-image img-rounded" alt="User" src={logo}/>
                            <b>{this.props.submit_username}</b>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    handleOnVote = () => (this.props.onVote(this.props.id));

    handleOnDownVote = () => (this.props.onDownVote(this.props.id));
}

export default App;
