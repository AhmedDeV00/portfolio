import React from 'react'
import "./contact.css";
import { useForm, ValidationError } from '@formspree/react';
import Lottie from 'lottie-react';
import doneAnimation from '../../animation/done.json';
import contactAnimation from "../../animation/contactus.json"
function Contact() {
    const [state, handleSubmit] = useForm("xeoqazlj");


    return (
        <section className='contact-us'>
            <h1 className='title'>
                <img src="./en.png" alt="" />
                Contact us
            </h1>
            <p className='sub-title'>Contact us for more information and Get notified when I publish something new.</p>
            <div className="flex" style={{justifyContent:"space-around"}}>
                <form className='' onSubmit={handleSubmit}>
                    <div className='flex'>
                        <label htmlFor="email">Email Address:</label>
                        <input autoComplete='off' required type="email" name='email' id="email" />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div style={{ marginTop: "24px" }} className='flex'>
                        <label htmlFor="message">You message:</label>
                        <textarea id="message" name='message' required></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <button type="submit" disabled={state.submitting}>
                        {state.submitting ? "Submitting..." : "Submit"}
                    </button>
                    {state.succeeded && (
                        <p className='flex' style={{color :"white", margin : "25px",fontSize:"18px", gap : "10px"}}>
                            <Lottie loop={false} style={{height :"35px"}} animationData={doneAnimation} />
                            Your message has been sent successfully!</p>
                    )}
                </form>
                <div className=" animation">
                    <Lottie className='contactAnimation' loop={true} style={{height : 355}} animationData={contactAnimation} />
                </div>
            </div>
        </section>
    )
}

export default Contact