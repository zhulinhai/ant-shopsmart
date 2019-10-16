import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const Product = ({id, price, count, preview, name}) =>(
    <Link to={ '/detail/' + id}>
        <div key={id} style={{ padding: '0 15px' }}>
            <div style={{  display: 'flex', padding: '15px 0' }}>
                <img style={{ height: '64px', marginRight: '15px', border: '1px solid #E1E2E3' }} src={ 'http://shopsmart.geek720.com' + preview} alt="" />
                <div style={{ lineHeight: 1 }}>
                    <div style={{ marginBottom: '8px', fontSize: '16px', fontWeight: 'bold', minHeight:'32px' }}>{name}</div>
                    <div style={{ color: '#FF6E27' }}><span style={{ fontSize: '20px' }}>{price}</span> ¥</div>
                </div>
            </div>
        </div>
    </Link>
)

Product.propTypes = {
    id: PropTypes.number,
    price: PropTypes.string,
    count: PropTypes.number,
    name: PropTypes.string,
    preview: PropTypes.string
}

export default Product