import React, {Component} from 'react'
import {ActionSheet, NavBar, Button} from 'antd-mobile'
import './SSNavBar.css'

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
    wrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}

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
                wrapProps,
            },
            (buttonIndex) => {
                this.props.history.push(URLS[buttonIndex]);
            });
    }

    render() {
        return (
            <NavBar style={{position:'fixed', top:'0', width:'100%', zIndex: '100' }}
                mode="dark"
                rightContent={[
                    <Button key="0" icon="ellipsis" onClick={this.showActionSheet}> </Button>,
                ]} >{this.props.title}</NavBar>
            )
    }
}

export default SSNavBar;