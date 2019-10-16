import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getCartProducts } from '../../reducers/index'
import ProductsList from './components/ProductsList'
import ProductItem from './components/ProductItem'

const CartContainer = ({ products, addToCart }) => (
    <ProductsList>
        {products.map(product =>
            <ProductItem
                key={product.id}
                product={product}
            />
        )}
    </ProductsList>
)

CartContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,

    })).isRequired,
}

const mapStateToProps = state => ({
    products: getCartProducts(state)
})

export default connect(mapStateToProps)(CartContainer)