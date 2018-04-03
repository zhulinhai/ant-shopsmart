import React, { Component } from 'react'
import { SearchBar, Tabs, Grid } from 'antd-mobile'
import SSNavBar from '../components/SSNavBar'
import './category.css';

const getTabs=(data)=> {
    let tabs = [];
    for (let item of data) {
        if (item.parent_id === 0) {
            tabs.push({title: item.name});
        }
    }
    return tabs;
}

const data1 = Array.from(new Array(10)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
}));

class CategoryPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabs: [],
            categories: []
        }
    }

    // 获取下拉框数据
    fetchCategoryData = () => {
        fetch('http://127.0.0.1:8000/api/category/getCategoryAll', {
            method: 'GET',
            mode: 'cors'
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            this.setState({
                tabs: getTabs(data.categories),
                categories: data.categories
            });
            console.log(this.state.categories)
        })
        .catch((e) => { console.log(e.message); });
    };

    componentDidMount() {
        this.fetchCategoryData();

    }

    render() {
        const content=()=>{

            return (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', backgroundColor: '#fff' }}>
                    <Grid style={{ width: '100%'}} data={data1}
                        columnNum={3}
                        renderItem={dataItem => (
                          <div>
                              <img src={dataItem.icon} style={{ width: '75px', height: 'auto' }} alt="" />
                              <div style={{ color: '#888', fontSize: '14px' }}>
                                  <span>I am title..</span>
                              </div>
                          </div>
                        )}
                    />
                </div>
            );
        };

        return (
            <div className="HomePage">
                <SSNavBar history={this.props.history} title='商品类别' />
                <div style={{ display: 'fixed', width: '100%', height: 'calc(100% - 45px)' }}>
                    <SearchBar placeholder="Search" onChange={this.onChange} maxLength={8} />
                    <Tabs tabs={this.state.tabs}
                          initalPage={'t2'}
                          usePaged="true"
                          tabBarPosition="left"
                          tabDirection="vertical"
                          style={{height:'100%'}}
                          onChange={(tab, index) => {
                              console.log(index);
                          }}
                    >
                        { content() }
                    </Tabs>
                </div>

            </div>
        );
    }
}

export default CategoryPage;