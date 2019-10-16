import React, { Component } from 'react'
// import { Card,  Stepper } from 'antd-mobile'
import CartContainer from './CartContainer'
import SSNavBar from '../../components/SSNavBar'
import PropTypes from 'prop-types'
import FooterContainer from './FooterContainer'

class Cart extends Component {

    render() {
        return (
            <div className="CartPage">
                <SSNavBar history={this.props.history} title="购物车" />
                <CartContainer />
                <FooterContainer />
            </div>
        );
    }
}

Cart.propTypes = {
    products: PropTypes.array,
    total: PropTypes.string,
    onCheckoutClicked: PropTypes.func
}

export default Cart;