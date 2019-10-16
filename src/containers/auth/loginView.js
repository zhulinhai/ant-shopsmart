import React, { Component } from 'react';
import {NavBar, List, Button, InputItem, WhiteSpace} from 'antd-mobile';
import {connect} from 'react-redux';

class LoginView extends Component
{

    handleClick=(e)=>{
        console.log('clicked');
    }

    render() {
        return (
            <div>
                <NavBar mode="dark" >走走看</NavBar>
                <WhiteSpace/>
                <List >
                    <InputItem
                        placeholder="注册手机号"
                        data-seed="logId"
                    >账号</InputItem>
                    <InputItem
                        placeholder="不少于6位"
                        data-seed="logId"
                    >密码</InputItem>
                    <InputItem
                        placeholder="验证码"
                        data-seed="logId"
                    >验证码</InputItem>
                    <WhiteSpace/>
                    <List.Item>
                        <Button type="primary" onClick={this.handleClick}>提交</Button><WhiteSpace />
                    </List.Item>
                </List>
            </div>

        );
    }
}

function mapStateToProps(state){
    return{
        phoneNum: state.phoneNum,
        isLogin: state.isLogin
    };
}
export default connect(mapStateToProps)(LoginView);

// export default LoginView;