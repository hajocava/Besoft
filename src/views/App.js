import React, { Fragment } from 'react'
import Nav from '../components/Head/Nav'
import Slider from '../components/Head/Slider'
import Workflow from '../components/Workflow/Work'

const App = () => (
    <Fragment>
        <header>
            <Nav />
            <Slider />
        </header>
        <main>
            <Workflow />
        </main>
    </Fragment>
)

export default App