import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    render() { 
        const totalItem = this.props.cart.length;

        return (
            <div>
                <span>{totalItem}</span>
            </div>
        )
    }
}

function mapStateToProps (state, prop) {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Header);