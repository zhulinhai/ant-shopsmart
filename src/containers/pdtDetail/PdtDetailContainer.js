import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addToCart } from "../../actions/product"
import { List, Flex, Button } from 'antd-mobile';
import ImageList from './component/ImageList'
// import { getPdtDImages, getPdtDContent, getPdtDProduct } from '../../reducers/detail'

const Item = List.Item;
const Brief = Item.Brief;

const PdtDetailContainer = ({ images, product, content,history, addToCart }) => (
    <div>
        <ImageList images={images}  />
        <List className="my-list">
            <Item extra={ "¥" + (product.price?product.price:'0') } align="top" multipleLine>
                { product.name } <Brief>{ product.summary }</Brief>
            </Item>
        </List>
        <List renderHeader={() => '产品详情'} className="my-list">
            <div className="html-content" style={{  overflowX: 'hidden', padding:'0 15px 50px' }} dangerouslySetInnerHTML={{ __html: content }} />
        </List>
        <Flex style={{ position:'fixed', bottom:'0', width:'100%', backgroundColor:'#108ee9' }} >
            <Flex.Item><Button onClick={()=>addToCart(product.id)} type="primary">加入购物车</Button></Flex.Item>
            <Flex.Item><Link to='/cart'><p type="primary" style={{color: '#fff', textAlign: 'center', fontSize: '18px'}}>查看购物车</p></Link></Flex.Item>
        </Flex>
    </div>
)

PdtDetailContainer.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        image_no: PropTypes.number.isRequired,
        image_path: PropTypes.string.isRequired
    })).isRequired,
    content: PropTypes.string.isRequired,
    product: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        summary: PropTypes.string,
        price: PropTypes.string,
        count: PropTypes.number,
    }).isRequired,
    addToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    // images: getPdtDImages(state.detail),
    // content: getPdtDContent(state.detail),
    // product: getPdtDProduct(state.detail),
})

export default connect(mapStateToProps, { addToCart})(PdtDetailContainer)