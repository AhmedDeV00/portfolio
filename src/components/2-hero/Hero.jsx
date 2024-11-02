import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/developer.json";
import { useRef } from "react";
import { motion } from "framer-motion";


function Hero() {
    const lotieRef = useRef();
    return (
        <section className="hero flex">
            <div className="leftSection">
                <div className="parent-avatar">
                    <motion.img
                        initial={{ transform: "scale(0)" }}
                        animate={{ transform: "scale(1.1)" }}
                        transition={{ damping: 6, type: "spring", stiffness: 50 }}
                        className="avatar" src="./me.png" alt="" />
                    <img className="badge" src="./badgee.png" alt="" />
                </div>
                <h1 className="title"> Ich bin ein leidenschaftlicher angehender Fachinformatiker für Anwendungsentwicklung aus Tunesien .</h1>
                <p className="sub-title">Meine Name ist Ahmed Benhenda,Als engagierter und motivierter Individuum strebe ich danach, in der dynamischen Welt der Softwareentwicklung mein Potenzial voll auszuschöpfen.</p>
                <div className="icons flex">
                    <img className="icon" src="./en.png" alt="" />
                    <img className="icon" src="./gg.png" alt="" />
                    <img className="icon" src="ll.png" alt="" />
                    <img className="icon" src="tw.png" alt="" />
                </div>
            </div>
            <div className="animation">
                <Lottie lottieRef={lotieRef} style={{ height: 375 }} onLoadedImages={() => {
                    /// https://lottiereact.com/
                    lotieRef.current.setSpeed(0.5)
                }} animationData={devAnimation} />
            </div>
        </section>
    )
}

export default Hero