import React, { Component } from 'react';
import PropTypes from 'prop-types'
import SSNavBar from '../../components/SSNavBar';
// import SSUListItem from '../../components/SSUListItem'

class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '我的'
        }
    }

    render() {
        const {nickName, level, history} = this.props

        return (
            <div className="UserPage">
                <SSNavBar history={ history } title="我的"  />

                {/*<div className="section">*/}
                    {/*<div className="headView">*/}
                        {/*<image className="headBg" src="../../src/headBg.png" />*/}
                        {/*<image className="headImg" src="{{headUrl}}" />*/}
                        {/*<div className="userInfo">*/}
                            {/*<div className="nickName">{{ nickName}}</div>*/}
                            {/*<div className="level">{{level}}</div>*/}
                        {/*</div>*/}
                        {/*<div className="obligations">待付款({})</div>*/}
                        {/*<div className="logistics">待收货(0)</div>*/}
                    {/*</div>*/}
                    {/*<SSUListItem title="我的订单" icon="../../src/list.png" url="" />*/}
                    {/*<div className="item record"><image className="icon" src="../../src/record.png" />浏览记录<image className="arrowRight" src="../../src/arrowRight.png" /></div>*/}
                    {/*<div className="item focus"><image className="icon" src="../../src/focus.png" />我的关注<image className="arrowRight" src="../../src/arrowRight.png" /></div>*/}
                    {/*<div className="item address" bindtap="chooseAddress"><image className="icon" src="../../src/address.png" />收货地址<image className="arrowRight" src="../../src/arrowRight.png" /></div>*/}
                    {/*<div className="item help"><image className="icon" src="../../src/help.png" />帮助<image className="arrowRight" src="../../src/arrowRight.png" /></div>*/}
                {/*</div>*/}
            </div>
        );
    }
}

UserPage.propsType = {
    nickName: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
}

export default UserPage;