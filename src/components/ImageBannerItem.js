import React, {Component} from 'react'

const HOST = 'http://shopsmart.geek720.com'

class ImageBannerItem extends Component {
    render () {
        return (
            <img src={HOST + this.props.item.image_path}
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

export default ImageBannerItem
