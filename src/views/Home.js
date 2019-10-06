import React, { Fragment } from 'react'
import Nav from '../components/Head/Nav'
import Slider from '../components/Head/Slider'
import Workflow from '../components/Workflow/Work'
import Project from '../components/Project/Index'
import About from '../components/About'
import Contact from '../components/Contact'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

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
            <Testimonials />
            <Footer />
        </main>
    </Fragment>
)

export default App