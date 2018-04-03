import React, { Component } from 'react'
import 'antd-mobile/dist/antd-mobile.css'
import {Carousel, ListView, Icon } from 'antd-mobile'
import SSNavBar from '../components/SSNavBar'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { fetchProductsIfNeeded } from '../../actions/product'
import './home.css'

const HOST = 'http://shopsmart.geek720.com';

class HomePage extends Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.state = {
            height: 0,
            ads: [],
            imgHeight: 176,
            slideIndex: 0,
            pageIndex: 0,
            count: 0,
            adUrl: 'http://localhost:8000/api/getADList/0',
            productListUrl: 'http://localhost:8000/api/getProductList',
            dataSource,
            isLoading: true,
        };

        console.log(this.props);
    }

    // 获取下拉框数据
    fetchADsData = () => {
        fetch(this.state.adUrl, {
            method: 'GET',
            mode: 'cors'
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => { this.setState({ads:data.ads}); })
        .catch((e) => { console.log(e.message); });
    };

    fetchActListData = ()=> {
        fetch(this.state.productListUrl, {
            method: 'GET',
            mode: 'cors'
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            this.setState({
                count: data.count,
                dataSource: this.state.dataSource.cloneWithRows(data.products.data),
                isLoading: false,
            });
        })
        .catch((e) => { console.log(e.message); });
    };

    // 组件渲染后获取外界数据(GET)
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchProductsIfNeeded())

        // 加载广告数据
        this.fetchADsData();

        // 加载活动列表
        // this.fetchActListData();
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
    //         const { dispatch, selectedSubreddit } = nextProps
    //         dispatch(fetchProductsIfNeeded(selectedSubreddit))
    //     }
    // }

    onEndReached = (event) => {
        console.log(event);
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        // if (this.state.isLoading && !this.state.hasMore) {
        //     return;
        // }
        // console.log('reach end', event);
        // this.setState({ isLoading: true });
        // setTimeout(() => {
        //     this.rData = { ...this.rData, ...genData(++pageIndex) };
        //     this.setState({
        //         dataSource: this.state.dataSource.cloneWithRows(this.rData),
        //         isLoading: false,
        //     });
        // }, 1000);
    };

    render() {
        const separator = (sectionID, rowID) => (
            <div key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: '#F5F5F9',
                    height: 1,
                }}
            />
        );

        const row = (rowData, sectionID, rowID) => {
            return (
                <Link to={ '/detail/' + rowData.id}>
                    <div key={rowID} style={{ padding: '0 15px' }}>
                        <div style={{  display: 'flex', padding: '15px 0' }}>
                            <img style={{ height: '64px', marginRight: '15px' }} src={ HOST + rowData.preview} alt="" />
                            <div style={{ lineHeight: 1 }}>
                                <div style={{ marginBottom: '8px', fontSize: '16px', fontWeight: 'bold', minHeight:'32px' }}>{rowData.name}</div>
                                <div style={{ color: '#FF6E27' }}><span style={{ fontSize: '20px' }}>{rowData.price}</span> ¥</div>
                            </div>
                        </div>
                    </div>
                </Link>
            );
        };

        return (
            <div className="HomePage">
                <SSNavBar history={this.props.history} title='走走看' />
                <ListView
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    renderHeader={()=>(
                        <Carousel autoplay={false}
                                  infinite
                                  selectedIndex={1}
                                  beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                                  afterChange={index => console.log('slide to', index)}
                        >
                            {this.state.ads && this.state.ads.map(val => (
                                <img src={HOST + val.preview}
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
                    )}
                    renderFooter={() => (
                        <div style={{ padding: 10, textAlign: 'center', lineHeight:'22px', display:'flex', justifyContent:'center' }}>
                            <Icon type="loading" style={{ display: this.state.isLoading ?  ' block' : 'none'}} />
                            {this.state.isLoading ?  '正在加载...' : '加载完成'}
                        </div>
                    )}
                    renderRow={row}
                    renderSeparator={separator}
                    className="am-list"
                    style={{
                        height: document.documentElement.clientHeight - 45,
                        overflow: 'auto',
                        marginTop: '45px'
                    }}
                    useBodyScroll
                    pageSize={4}
                    onScroll={() => { console.log('scroll'); }}
                    scrollRenderAheadDistance={500}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={10}
                />
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        ads: state.ads,
        pdtList: state.pdtList,
        isLoadingPdt: state.isLoadingPdt,
        isLoadingAds: state.isLoadingAds
    };
}
export default connect(mapStateToProps)(HomePage);

// export default HomePage;
