import React from 'react'
import SimpleBar from 'simplebar-react'
import Nav from '../components/Head/Nav'
import Slider from '../components/Head/Slider'
import Workflow from '../components/Workflow/Work'

const App = () => (
    <SimpleBar style={{ height: '100vh' }}>
        <header>
            <Nav />
            <Slider />
        </header>
        <main>
            <Workflow />
        </main>
    </SimpleBar>
)

export default App