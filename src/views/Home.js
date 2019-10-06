import React, { Fragment } from 'react'
import Nav from '../components/Head/Nav'
import Slider from '../components/Head/Slider'
import Workflow from '../components/Workflow/Work'
import About from '../components/About/About'
import Project from '../components/Project/Index'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/footer'

const App = () => (
    <Fragment>
        <header>
            <Nav />
            <Slider />
        </header>
        <main>
            <Workflow />
            <About />
            <Project />
            <Contact />
            <Footer />
        </main>
    </Fragment>
)

export default App