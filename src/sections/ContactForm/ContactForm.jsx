import emailjs from 'emailjs-com';
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

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target);
        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                e.target,
                process.env.REACT_APP_USER_ID
            )
            .then(
                result => {
                    console.log(result.text);
                    //TODO: SHow successfully submitted window
                },
                error => {
                    console.log(error.text);
                    //TODO: SHow error window
                }
            );
        e.target.reset();
        setMessageVal('');
    }

    return (
        <section className="section-contact">
            <div className="contact-form" id="contact-form">
                <h2 className="heading-secondary">Contact Me</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form__group">
                        <input
                            className="form__input"
                            id="first-name"
                            type="text"
                            placeholder="First Name"
                            name="from_first-name"
                            // required
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
                            name="from_last-name"

                            // required
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
                            name="from_email"
                            // required
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
                            name="message"
                            // required
                        />
                        <label
                            className="form__label form__label--message"
                            htmlFor="message"
                        >
                            <span>Message</span>
                            <span>{messageVal.length}/280</span>
                        </label>
                    </div>

                    <input
                        type="submit"
                        className="btn form__btn"
                        value="Send Message"
                    ></input>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
