import React, {Component} from 'react'
import PropTypes from 'prop-types'

const HOST = 'http://shopsmart.geek720.com'

class BannerItem extends Component {
    render () {
        return (
            <img src={HOST + this.props.item.preview}
                 key={this.props.item.id}
                 alt=""
                 style={{ width: '100%', imgHeight: 'auto', height: '176', verticalAlign: 'top' }}
                 onLoad={() => {
                     // fire window resize event to change height
                     window.dispatchEvent(new Event('resize'));
                     this.setState({ imgHeight: 'auto' });
                 }}
            />)
    }
}

BannerItem.propType = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
}

export default BannerItem
