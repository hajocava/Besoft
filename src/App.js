import React from 'react'
import Router from './Router'
import { ParallaxProvider } from 'react-scroll-parallax'

export default function App() {
    return (
        <ParallaxProvider>
            <Router />
        </ParallaxProvider>
    )
}
