import React, { useState } from 'react'
import "./main.css"
import { Myprojects } from '../../data.js';
import { AnimatePresence, motion } from 'framer-motion';

function Main() {
    const [currentActive, setcurrentActive] = useState("all");
    const [arr, setArr] = useState(Myprojects);

    const handleClick = (btnCategory) => {
        setcurrentActive(btnCategory);

        if (btnCategory === "all") {
            setArr(Myprojects);
        } else {
            const newArr = Myprojects.filter((item) => item.category === btnCategory);
            setArr(newArr);
        }
    };
    return (
        <main className='flex'>
            <section className=" flex left-section">
                <button onClick={() => { handleClick("all") }} className={currentActive === "all" ? "active" : null}>All Projects</button>
                <button onClick={() => { handleClick("css") }} className={currentActive === "css" ? "active" : null}>HTML & CSS</button>
                <button onClick={() => { handleClick("javascript") }} className={currentActive === "javascript" ? "active" : null}>Javascript</button>
                <button onClick={() => { handleClick("react") }} className={currentActive === "react" ? "active" : null}>React.js</button>
                <button onClick={() => { handleClick("mernStack") }} className={currentActive === "mernStack" ? "active" : null}>Mern Stack</button>
                <button onClick={() => { handleClick("nodeMysql") }} className={currentActive === "nodeMysql" ? "active" : null}>Node js & Mysql</button>
                <button onClick={() => { handleClick("phpMysql") }} className={currentActive === "phpMysql" ? "active" : null}>PHP & Mysql</button>
            </section>
            <section className=" flex right-section">
                <AnimatePresence>
                    {arr.map((item) => {
                        return (
                            <motion.article
                                layout
                                initial={{ transform: "scale(0)" }}
                                animate={{ transform: "scale(1)" }}
                                transition={{type: "spring",damping: 8, stiffness : 50}}
                                key={item.title} className='card'>
                                <img width={266} height={180} src={item.image} alt="" />
                                <div className="box" style={{ width: "266px" }}>
                                    <h1 className='title'>{item.title}</h1>
                                    <p className='sub-title'>{item.desc}</p>
                                    <div className="flex icons">
                                        <div style={{ gap: "11px" }} className="flex">
                                            <a href={item.live} target="_blank" rel="noopener noreferrer" ><img src="./link.png" width={25} alt="" /></a>
                                            <a href={item.github} target="_blank" rel="noopener noreferrer" ><img src="./gg.png" alt="" /></a>
                                        </div>
                                        <a className='flex link' target='blank' rel="noopener noreferrer" href={item.github}>more <img src="./next.png" alt="" /></a>
                                    </div>
                                </div>
                            </motion.article>
                        )
                    })}
                </AnimatePresence>
            </section>
        </main>
    )
}

export default Main