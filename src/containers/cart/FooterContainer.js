import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {checkout} from "../../actions/product"
import {getTotal} from "../../reducers/index"
import './FooterContainer.css'

const FooterContainer = ({num, priceCount, discount})=> (
    <div className="bottom">
        <div className="checkAll">
            {/*<image className="checkImage" src="../../src/check.png" />*/}
            {/*<image className="checkImage" src="../../src/uncheck.png" />*/}
            <label>全选</label>
        </div>
        <div className="price">
            <p className="priceCount">总计: <label>¥ {priceCount}</label></p>
        </div>
        <div className="btnBuy">去结算({num})</div>
    </div>
)

FooterContainer.propTypes = {
    num: PropTypes.number,
    priceCount: PropTypes.string,
    discount: PropTypes.number
}

const mapStateToProps = state => ({
    num: 0,
    priceCount: getTotal(state),
    discount: 0
})


export default connect(mapStateToProps, {checkout})(FooterContainer)
