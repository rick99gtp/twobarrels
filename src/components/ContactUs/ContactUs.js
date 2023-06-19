import "./ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const ContactUs = () => {
	const isMobile = window.innerWidth <= 768;
	const mapWidth = (window.innerWidth - 260) / 3;

	const [nameValue, setNameValue] = useState("");
	const [messageValue, setMessageValue] = useState("");
	const [emailValue, setEmailValue] = useState("");

	const API_KEY = process.env.REACT_APP_API_KEY;

	useEffect(() => {
		document.title = "Contact Us | Two Barrels LLC";
	}, []);

	return (
		<div className="outer-contactus__container">
			{!isMobile && (
				<div className="map-wrapper">
					<div className="map">
						<iframe
							title="a"
							width={mapWidth}
							height="250"
							frameBorder="0"
							referrerPolicy="no-referrer-when-downgrade"
							src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=47.658166,-117.420&zoom=17`}
							allowFullScreen
						></iframe>
					</div>
					<div className="map">
						<iframe
							title="b"
							width={mapWidth}
							height="250"
							frameBorder="0"
							referrerPolicy="no-referrer-when-downgrade"
							src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=30.341415,-97.754743&zoom=17`}
							allowFullScreen
						></iframe>
					</div>
					<div className="map">
						<iframe
							title="c"
							width={mapWidth}
							height="250"
							frameBorder="0"
							referrerPolicy="no-referrer-when-downgrade"
							src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=40.62665,-111.85662&zoom=17`}
							allowFullScreen
						></iframe>
					</div>
				</div>
			)}
			<div className="contactus__container">
				<section className="contactus-row">
					<h1>Contact Us</h1>
					<form method="post">
						<p>
							Have a question? Wonder where we're located? You've come to the
							right place. To get in touch with us fill out the form below:
						</p>
						<div className="form-group">
							<label htmlFor="name">Name</label>
							<input
								name="name"
								type="text"
								value={nameValue}
								onChange={(e) => setNameValue(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="email">Email Address</label>
							<input
								name="email"
								type="text"
								value={emailValue}
								onChange={(e) => setEmailValue(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="message">Message</label>
							<textarea
								name="message"
								value={messageValue}
								onChange={(e) => setMessageValue(e.target.value)}
							/>
						</div>
						<div className="btn-send">
							<button className="">
								Send Message
								<FontAwesomeIcon
									className="btn-send-icon"
									icon={"chevron-right"}
								/>
							</button>
						</div>
					</form>
				</section>
			</div>
		</div>
	);
};

export default ContactUs;
