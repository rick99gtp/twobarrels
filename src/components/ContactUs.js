import './ContactUs.css';
import Map from '../assets/map.jpg';

const ContactUs = () => {
    return (
        <div className='contactus__container'>
            <img src={Map} alt="map" />
            <section className='row'>
                <h1>Contact Us</h1>
                <form method="post">
                    <p>Have a question? Wonder where we're located?
                        You've come to the right place.
                        To get in touch with us fill out the form below:</p>
                    
                </form>
            </section>
        </div>
    )
}

export default ContactUs;