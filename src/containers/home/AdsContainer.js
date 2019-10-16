import React from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'antd-mobile';
import {connect} from 'react-redux'
import { getVisibleAds } from '../../reducers/ads'
import BannerItem  from '../../components/BannerItem'

const AdsContainer = ({ ads })=>(
    <Carousel style={{width: '100%', imgHeight: 'auto', height: '176'}}>
        {ads.map(val => (
            <BannerItem key={val.id} item={val} />
        ))}
    </Carousel>
)

AdsContainer.propTypes = {
    ads: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    })).isRequired,
}

const mapStateToProps = state => ({
    ads: getVisibleAds(state.ads)
})

export default connect(mapStateToProps)(AdsContainer)