import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ProductItem from './components/ProductItem'
import ProductsList from './components/ProductsList'
import { getVisibleProducts } from '../../reducers/products'

const ProductsContainer = ({ products, addToCart }) => (
    <ProductsList>
        {products.map(product =>
            <ProductItem
                key={product.id}
                product={product}
            />
        )}
    </ProductsList>
)

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired
    })).isRequired,
}

const mapStateToProps = state => ({
    products: getVisibleProducts(state.products)
})

export default connect(mapStateToProps)(ProductsContainer)