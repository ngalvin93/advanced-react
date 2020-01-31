import React, { Component } from 'react'
import Header from './Header'
import Meta from './Meta'
// For using styled components
// import styled from 'styled-components'

// Here you define your styled component then use in the return()
// const MyButton = styled.button`
//     background: red;
//     font-size: 100px;
// `

export default class Page extends Component {
    render() {
        return (
            <div>
                <Meta />
                <Header />
                { this.props.children }
            </div>
        )
    }
} 
