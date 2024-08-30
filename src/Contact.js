import './Contact.css';
import { useRef} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      
      emailjs
        .sendForm('service_nutq4gk', 'template_o9kns8y', form.current, {
          publicKey: 'RShOGDAstSevUpBgl',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            window.location.reload();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    return ( 
        <>
        <div className="contact-container">
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <p>Email: Harmitdesai9357@gmail.com</p>
                    <p>Phone: (602) 585-7906</p>
                    <p>
                    I am a passionate developer and machine learning enthusiastic with experience in creating dynamic and responsive full-stack web applications and experience in GenAI base models. Feel free to reach out for collaborations or inquiries.
                    </p>
                </div>
                <div className="contact-form">
                    <h2>Get in Touch</h2>
                    <form ref={form} onSubmit={sendEmail}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="tel" id="phone" name="phone" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
     );
}
 
export default Contact;