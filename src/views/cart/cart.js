import React, { Component } from 'react'
import { Card,  Stepper } from 'antd-mobile'
import SSNavBar from '../components/SSNavBar'

class cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 3,
        };
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

            console.log(data)
        })
        .catch((e) => { console.log(e.message); });
    };

    componentDidMount() {
        this.fetchCategoryData();
    }

    onChange = (val) => {
        // console.log(val);
        this.setState({ val });
    }

    render() {
        return (
            <div className="CartPage">
                <SSNavBar history={this.props.history} title="购物车" />
                <Card style={{marginTop:'45px'}}>
                    <Card.Header
                        title="This is title"
                        thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
                        extra={
                            <Stepper
                                style={{ width: '100%', maxWidth: '90px' }}
                                showNumber
                                max={100}
                                min={1}
                                value={this.state.val}
                                onChange={this.onChange}
                            />
                        }
                    />
                </Card>
            </div>
        );
    }
}

export default cart;