import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CartActions from '../actions/cart';
import Shelf from './shelf';

class Cart extends Component {
 render() { 
        console.log(this.props);
        const CartItems = this.props.cart.map((item, i) => (
            <li key={i}>{item}</li>
        ));

        return (
            <div className="Cart">
                <Shelf addItem={this.props.action.addToCart} />
                <h2>Cart items</h2>
                <ol>
                    {CartItems}
                </ol>
            </div>
        )
    }
}

// state retorna todo estado da store 
// o objeto retornado compoem seletores a 
// serem passados como props para o componente
function mapStateToProps(state, prop) {
    return {
        cart: state.cart
    }
}

// os seletores compoem criadores de ação
// incorporados nas props
function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(CartActions, dispatch)
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Cart);