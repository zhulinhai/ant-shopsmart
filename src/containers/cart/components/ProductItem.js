import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const ProductItem = ({ product })=>(
    <div style={{marginBottom: 10, borderBottom: '1px solid #E1E2E3'}}>
        <Product
            name={product.name}
            price={product.price}
            count={product.count}
            preview={product.preview}
            quantity={product.quantity}
            id={product.id}
        >
        </Product>

    </div>
)

ProductItem.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired
}

export default ProductItem