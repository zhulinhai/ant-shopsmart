import React from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import homeNormal from './images/home_normal.png';
import homeHover from './images/home_hover.png';
import categoryNormal from './images/catergry_normal.png';
import categoryHover from './images/catergry_hover.png';
import cartNormal from './images/cart_normal.png';
import cartHover from './images/cart_hover.png';
import userNormal from './images/user_normal.png';
import userHover from './images/user_hover.png';

import { TabBar } from 'antd-mobile';
import HomePage from './views/home/home';
import CategoryPage from './views/category/category';
import CartPage from './views/cart/cart';
import UserPage from './views/user/user';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'homeTab',
            hidden: false,
            fullScreen: true,
        };
    }

    render() {
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                <TabBar
                    unselectedTintColor="#888"
                    tintColor="#f23030"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '28px',
                                height: '28px',
                                background: `url(${homeNormal}) center center /  26px 26px no-repeat` }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '28px',
                                height: '28px',
                                background: `url(${homeHover}) center center /  26px 26px no-repeat` }}
                            />
                        }
                        title="首页"
                        key="Home"
                        selected={this.state.selectedTab === 'homeTab'}
                        badge={0}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'homeTab',
                            });
                        }}
                        data-seed="logId"
                    >
                        <HomePage/>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '28px',
                                height: '28px',
                                background: `url(${categoryNormal}) center center /  26px 26px no-repeat` }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '28px',
                                height: '28px',
                                background: `url(${categoryHover}) center center /  26px 26px no-repeat` }}
                            />
                        }
                        title="分类"
                        key="Category"
                        badge={''}
                        selected={this.state.selectedTab === 'categoryTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'categoryTab',
                            });
                        }}
                        data-seed="logId1"
                    >
                        <CategoryPage />
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '28px',
                                height: '28px',
                                background: `url(${cartNormal}) center center /  26px 26px no-repeat` }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '28px',
                                height: '28px',
                                background: `url(${cartHover}) center center /  26px 26px no-repeat` }}
                            />
                        }
                        title="购物车"
                        key="Cart"
                        selected={this.state.selectedTab === 'cartTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'cartTab',
                            });
                        }}
                    >
                        <CartPage/>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '28px',
                                height: '28px',
                                background: `url(${userNormal}) center center /  26px 26px no-repeat` }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '28px',
                                height: '28px',
                                background: `url(${userHover}) center center /  26px 26px no-repeat` }}
                            />
                        }
                        title="我的"
                        key="User"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                        }}
                    >
                        <UserPage/>
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}

export default  Main;

// registerServiceWorker();