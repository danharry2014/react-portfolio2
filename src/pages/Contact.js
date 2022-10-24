    import React, { useRef } from 'react';
    import emailjs from '@emailjs/browser';
    import styled from 'styled-components';

    const Contact = () => {
        const form = useRef();

        const sendEmail = (e) => {
            e.preventDefault();

            emailjs.sendForm('service_c00xx8b', 'template_4bywgfe', form.current, '76-bK4gj8fGSVo2xG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        };

        return (
        <center>
            <h1>Please feel free to send a message</h1>
            <StyledContactForm>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" placeholder='Please Enter your Name' required/>
                    <label>Email</label>
                    <input type="email" name="user_email" placeholder="Please Enter your Email" required/>
                    <label>Message</label>
                    <textarea name="message" placeholder="Please feel free to send a  message."/>
                    <input type="submit" value="Send" />
                </form>
            </StyledContactForm>
        </center>
    );
    };

    export default Contact

    // Styles
    const StyledContactForm = styled.div`
    width: 500px;

    form {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
        font-size: 16px;

        input {
        width: 100%;
        height: 35px;
        padding: 7px;
        outline: none;
        border-radius: 5px;
        border: 1px solid rgb(220, 220, 220);

        &:focus {
            border: 2px solid rgba(0, 206, 158, 1);
        }
        }

        textarea {
        max-width: 100%;
        min-width: 100%;
        width: 100%;
        max-height: 100px;
        min-height: 100px;
        padding: 7px;
        outline: none;
        border-radius: 5px;
        border: 1px solid rgb(220, 220, 220);

        &:focus {
            border: 2px solid rgba(0, 206, 158, 1);
        }
        }

        label {
        margin-top: 1rem;
        }

        input[type="submit"] {
        margin-top: 2rem;
        cursor: pointer;
        background: rgb(249, 105, 14);
        color: white;
        border: none;
        }
    }
    `;