import React from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'antd-mobile';
import ImageBannerItem  from '../../../components/ImageBannerItem'

const ImageList = ({ images })=>(
    <Carousel style={{width: '100%', imgHeight: 'auto', height: '176'}}>
        { images.map(val => (
            <ImageBannerItem key={val.id} item={val} />
        ))}
    </Carousel>
)

ImageList.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        image_no: PropTypes.number.isRequired,
        image_path: PropTypes.string.isRequired
    })).isRequired,
}

export default ImageList