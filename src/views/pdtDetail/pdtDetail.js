import React, { Component } from 'react';
import {Carousel, NavBar, Icon, List, Flex, Button, Toast } from 'antd-mobile';
import './pdtDetail.css';

const HOST = 'http://shopsmart.geek720.com';

const Item = List.Item;
const Brief = Item.Brief;
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
            actDetailUrl: 'http://localhost:8000/api/getPdtContent/',
            images: [],
            content: '',
            product: [],
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
                <NavBar mode="dark"
                        icon={<Icon type="left" size="lg" />}
                        onLeftClick={() => this.props.history.goBack() }
                >活动详情</NavBar>
                <Carousel autoplay={false}
                          infinite
                          selectedIndex={1}
                          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                          afterChange={index => console.log('slide to', index)}
                >
                    {this.state.images && this.state.images.map(val => (
                        <img src={HOST + val.image_path}
                             key={val.id}
                             alt=""
                             style={{ width: '100%', verticalAlign: 'top' }}
                             onLoad={() => {
                                 // fire window resize event to change height
                                 window.dispatchEvent(new Event('resize'));
                                 this.setState({ imgHeight: 'auto' });
                             }}
                        />
                    ))}
                </Carousel>
                <List className="my-list">
                    <Item extra={ "¥" + (this.state.product.price?this.state.product.price:0) } align="top" multipleLine>
                        {this.state.product.name} <Brief>{ this.state.product.summary }</Brief>
                    </Item>
                </List>
                <List renderHeader={() => '产品详情'} className="my-list">
                    <div className="html-content" style={{  overflowX: 'hidden', padding:'0 15px 50px' }} dangerouslySetInnerHTML={{ __html: fixMarkDownHtml(this.state.content) }} />
                </List>
                <Flex style={{ position:'fixed', bottom:'0', width:'100%', backgroundColor:'#108ee9' }} >
                    <Flex.Item style={{marginLeft:'0'}}><Button onClick={
                        this.dis
                    } type="primary">加入购物车</Button></Flex.Item>
                    <Flex.Item style={{marginLeft:'0'}}><Button type="primary">查看购物车</Button></Flex.Item>
                </Flex>
            </div>

        );
    }
}

export default PdtDetailPage;