import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class SSUListItem extends Component {

    render() {
        return (
            <Link to={ this.props.url }><div className="item"><image className="icon" src={this.props.icon} />{this.props.title}<image className="arrowRight" src="../../src/arrowRight.png" /></div></Link>
        )
    }
}
