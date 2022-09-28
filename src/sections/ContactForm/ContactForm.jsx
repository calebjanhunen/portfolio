import React, { useEffect, useState } from 'react';

import '../../sass/_global.scss';
import './ContactForm.scss';

const ContactForm = () => {
    const [textAreaHeight, setTextAreaHeight] = useState(1);
    const [firstNameVal, setFirstNameVal] = useState('');
    const [lastNameVal, setLastNameVal] = useState('');
    const [emailVal, setEmailVal] = useState('');
    const [messageVal, setMessageVal] = useState('');

    const textAreaRef = React.useRef(null);

    //Changes message text area height automatically
    useEffect(() => {
        textAreaRef.current.style.height = 'auto';
        textAreaRef.current.style.height =
            textAreaRef.current.scrollHeight + 'px';
    }, [messageVal]);

    return (
        <section className="section-contact">
            <div className="contact-form" id="contact-form">
                <h2 className="heading-secondary">Contact Me</h2>
                <form className="form" action="#">
                    <div className="form__group">
                        <input
                            className="form__input"
                            id="first-name"
                            type="text"
                            placeholder="First Name"
                        />
                        <label className="form__label" htmlFor="first-name">
                            First Name
                        </label>
                    </div>

                    <div className="form__group">
                        <input
                            className="form__input"
                            id="last-name"
                            type="text"
                            placeholder="Last Name"
                        />
                        <label className="form__label" htmlFor="last-name">
                            Last Name
                        </label>
                    </div>

                    <div className="form__group">
                        <input
                            className="form__input"
                            id="email"
                            type="email"
                            placeholder="Email"
                        />
                        <label className="form__label" htmlFor="email">
                            Email
                        </label>
                    </div>

                    <div className="form__group">
                        <textarea
                            className="form__input form__input--message"
                            id="message"
                            type="textarea"
                            placeholder="Message"
                            rows={textAreaHeight}
                            ref={textAreaRef}
                            onChange={e => setMessageVal(e.target.value)}
                            maxLength="280"
                        />
                        <label
                            className="form__label form__label--message"
                            htmlFor="message"
                        >
                            <span>Message</span>
                            <span>{messageVal.length}/280</span>
                        </label>
                    </div>

                    <button className="btn form__btn">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
