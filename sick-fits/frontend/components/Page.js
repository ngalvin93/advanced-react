import React, { Component } from 'react'
import Header from './Header'

export default class Page extends Component {
    render() {
        return (
            <div>
                <p>Hey I'm the Page component on every page!</p>
                <Header />
                { this.props.children }
            </div>
        )
    }
}
