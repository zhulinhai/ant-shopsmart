import React, {Component} from 'react'
import {ActionSheet, NavBar} from 'antd-mobile'
import './SSNavBar.scss'

class SSNavBar extends Component
{
    showActionSheet = () => {
        const BUTTONS = ['首页', '商品类别', '购物车', '我的', '取消'];
        const URLS = ['/', '/category', '/cart', '/user'];

        ActionSheet.showActionSheetWithOptions({
            options: BUTTONS,
            cancelButtonIndex: BUTTONS.length - 1,
            maskClosable: true,
            'data-seed': 'menu',
            // wrapProps,
        },
        (buttonIndex) => {
            this.props.history.push(URLS[buttonIndex])
        });
    }

    render() {
        return (
            <div>
                <NavBar style={{position:'fixed', top:'0', width:'100%', zIndex: '100' }}
                        mode="dark">
                    {this.props.title}
                </NavBar>
                <div style={{ width:'100%', height: '45px'}} />
            </div>

        )
    }
}

export default SSNavBar;

// rightContent={[
//     <a key="0" onClick={this.showActionSheet}><Icon type="ellipsis" /></a>,
// ]} >