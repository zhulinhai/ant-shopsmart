import React, {Component} from 'react'
import AdsContainer from './AdsContainer'
import ProductsContainer from './ProductsContainer'
import SSNavBar from '../../components/SSNavBar'

class Home extends Component {
    render() {
        return (
            <div className="HomePage">
                <SSNavBar history={this.props.history} title='走走看' />
                <AdsContainer />
                <ProductsContainer />
            </div>
        )
    }
}

export default Home