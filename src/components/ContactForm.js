import React from 'react'
import contactstyles from '../css/contact.module.css'

const ContactForm = () => {
    return (
        <div className={contactstyles.center}> 
            <form action="https://formspree.io/cosmiqwarrior@gmail.com" method="POST" className={contactstyles.form}>
                <div>
                    <input type="text" name="name" id="name" className={contactstyles.formControl} placeholder="Name"/>
                </div>
                <div>
                    <input type="email" name="email" id="email" className={contactstyles.formControl} placeholder="Name@name.com"/>
                </div>
                <div>
                    <textarea name="message" id="message" rows="14" className={contactstyles.formControl} placeholder="Message"/>
                </div>
                <div>
                    <input type="submit" name="Submit" id="submit" className={contactstyles.submit} />
                </div>
            </form>
        </div>
    )
}

export default ContactForm
