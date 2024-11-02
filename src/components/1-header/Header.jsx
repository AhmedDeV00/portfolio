import React from 'react'
import "./header.css";
import LinkItem from './LinkItem';
import { useState, useEffect } from "react";

function Header() {

    const [showModal, setshowModal] = useState(false);
    const [theme, setTheme] = useState("dark")

    useEffect(() => {
        if (theme === "light") {
            document.body.classList.remove("dark")
            document.body.classList.add("light")
        } else {
            document.body.classList.remove("light")
            document.body.classList.add("dark")
        }
    }, [theme])

    return (
        <header className='flex'>
            <button onClick={() => {
                setshowModal(true)
            }} className='menu'>
                <div className="icon-menu"></div>
                <div className="icon-menu"></div>
                <div className="icon-menu"></div>

            </button>
            <div />
            <nav>
                <ul className='flex'>
                    <LinkItem name="About" />
                    <LinkItem name="Articles" />
                    <LinkItem name="Projects" />
                    <LinkItem name="Speaking" />
                    <LinkItem name="Uses" />
                </ul>
            </nav>
            <button onClick={() => {
                localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark")
                setTheme(localStorage.getItem("currentMode"))
            }} className="moon">
                {theme === "dark" ? (<img src="./moon.png" alt="" />) : (<img src='./sun.png' alt='' />)}
            </button>
            {
                showModal && (
                    <div className="fixed">
                        <ul className="modal">
                            <li>
                                <div />
                                <button className="icon-cancel" onClick={() => {
                                    setshowModal(false)
                                }} >
                                    <svg xmlns="http://www.w3.org/2000/svg" height="33px" viewBox="0 -960 960 960" width="33px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                                </button>
                            </li>
                            <LinkItem className="divider" name="About" />
                            <LinkItem className="divider" name="Articles" />
                            <LinkItem className="divider" name="Projects" />
                            <LinkItem className="divider" name="Speaking" />
                            <LinkItem className="divider" name="Uses" />
                        </ul>
                    </div>
                )
            }
        </header >
    )
}

export default Header