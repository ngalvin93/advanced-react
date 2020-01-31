// Purpose of this component is to persist layout between pages, keep state when navigating pages, etc.
// Wraps everything
import App, { Container } from 'next/app'
import Page from '../components/Page'

// Component in this case is a component in ../components
class MyApp extends App {
    render() {
        const { Component } = this.props
        return(
            <Container>
                <Page>
                    <Component />
                </Page>
            </Container>
        )
    }
}

export default MyApp