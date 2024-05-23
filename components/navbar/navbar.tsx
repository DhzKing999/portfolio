import { it } from 'node:test'
import React from 'react'
import { ModeToggle } from './theme-toggle'

const Navbar = () =>
{

    const navData = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Contact",
            path: "/contact"
        }
    ]
    return (
        <header>
            <nav className=' h-[10vh] flex items-center justify-between px-48'>
                <h1 className=' text-3xl font-bold'>ArZun<span>D</span></h1>
                <ModeToggle />
            </nav>
        </header>
    )
}

export default Navbar