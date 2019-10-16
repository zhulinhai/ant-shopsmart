import React, { Component } from 'react';

import PdtDetailContainer from './PdtDetailContainer'
import {NavBar, Toast, Icon } from 'antd-mobile';
import './PdtDetail.css';

const fixMarkDownHtml = (content)=>{
    let fHtml = content;
    fHtml = fHtml.replace(/img/g, 'img style="width:100%" ');
    return fHtml;
};

class PdtDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '活动详情',
            actDetailUrl: '/api/getPdtContent/',
            images: [],
            content: '',
            product: {},
        }
    }

    componentWillMount() {
        Toast.loading('正在加载...', 1, () => {
            console.log('Load complete !!!');
        });
    }

    fetchActDetailData = (id) => {
        fetch(this.state.actDetailUrl +id, {
            method: 'GET',
            mode: 'cors'
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            this.setState({
                images: data.images,
                content: data.content.html,
                product: data.product
            });
        })
        .catch((e) => { console.log(e.message); });
    };

    componentDidMount() {
        this.fetchActDetailData(this.props.match.params.id);
    }

    render() {
        return (
            <div className="PdtDetailPage">
                <NavBar style={{position:'fixed', top:'0', width:'100%', zIndex: '100' }}
                    mode="dark"
                    icon={<Icon type="left" size="lg" />}
                    onLeftClick={() => this.props.history.goBack() }
                >活动详情</NavBar>
                <PdtDetailContainer content={fixMarkDownHtml(this.state.content)} images={this.state.images} product={this.state.product} />
            </div>
        );
    }
}

export default PdtDetailPage
