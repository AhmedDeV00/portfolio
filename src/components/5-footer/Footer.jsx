import React from 'react'
import "./footer.css";

function Footer() {
    return (
        <footer className='flex'>
            <ul className='flex'>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#speaking">Speaking</a></li>
                <li><a href="#uses">Uses</a></li>
            </ul>
            <p>© 2024 Spencer Sharp. All rights reserved.</p>
        </footer>
    )
}

export default Footer