import React, { Component } from 'react'
import { SearchBar, Tabs, Grid } from 'antd-mobile'
import SSNavBar from '../../components/SSNavBar'
import './category.css';

const getTabs=(data)=> {
    let tabs = [];
    for (let item of data) {
        if (item.parent_id === 0) {
            tabs.push({title: item.name, id: item.id});
        }
    }
    return tabs;
}

const getItems=(tabItem, data)=>{
    let list = [];
    if (data) {
        for (let item of data) {
            if (tabItem.id === item.parent_id) {
                list.push({title: item.name, id: item.id, preview: item.preview})
            }
        }
    }

    return list;
}

class CategoryPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabs: [],
            categories: [],
            displayContent: [],
            selectedIndex: 0
        }
    }

    // 获取下拉框数据
    fetchCategoryData = () => {
        fetch('/api/category/getCategoryAll', {
            method: 'GET',
            mode: 'cors'
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let list = data.categories, tabs = getTabs(list);
            this.setState({tabs: tabs, categories: list, displayContent: getItems(tabs[0], list) });
        })
        .catch((e) => { console.log(e.message); });
    };

    componentDidMount() {
        this.fetchCategoryData();
    }

    render() {
        const tabs=(data)=>{
            <div></div>
            return ;
        };
        const content=(data)=>{
            return (
                <div style={{ display: 'flex', alignItems: 'center', padding: '0',  width: '100%', height: '100%', backgroundColor: '#fff' }}>
                    <Grid style={{ width: '100%'}} data={data}
                        columnNum={3}
                        renderItem={dataItem => (
                          <div>
                              <img src={'http://shopsmart.geek720.com/' + dataItem.preview} style={{ width: '75px', height: 'auto' }} alt="" />
                              <div style={{ color: '#888', fontSize: '14px' }}>
                                  <span>{dataItem.title}</span>
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
                <SearchBar placeholder="Search" onChange={this.onChange} maxLength={8} />
                {/*<Tabs tabs={this.state.tabs}*/}
                      {/*initalPage={'t2'}*/}
                      {/*usePaged="false"*/}
                      {/*tabBarPosition="left"*/}
                      {/*tabDirection="vertical"*/}
                      {/*style={{display: 'fixed', width: '100%', height: 'calc(100% - 45px)', marginTop: '45px', backgroundColor: 'red'}}*/}
                      {/*onChange={(tab, index) => {*/}
                          {/*this.setState({selectedIndex: index, displayContent: getItems(this.state.tabs[index], this.state.categories) });*/}
                      {/*}}*/}
                {/*>*/}
                    {/*{ content(this.state.displayContent) }*/}
                {/*</Tabs>*/}
                { content(this.state.displayContent) }
            </div>
        );
    }
}

export default CategoryPage;