import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
	return (
		<div className="footer__container">
			<div className="row">
				<div className="footer-text">
					<address>
						<p className="office-name">Spokane Office</p>
						<p>522 W. Riverside Ave</p>
						<p>Spokane, WA 99201</p>
						<p>
							<a href="tel:5093151149">(509) 315-1149</a>
						</p>
					</address>
					<address>
						<p className="office-name">Austin Office</p>
						<p>5900 Balcones Drive, Suite 100</p>
						<p>Austin, TX 78731</p>
					</address>
					<address>
						<p className="office-name">Salt Lake Office</p>
						<p>1225 E. Fort Union Blvd</p>
						<p>Suite 100</p>
						<p>Midvale, UT 84047</p>
					</address>
				</div>
				<div className="footer__container--socials">
					<ul>
						<li>
							<a
								href="https://twitter.com/GiveEm2Barrels"
								alt="Twitter"
								title="Twitter"
								rel="noopener"
								target="_blank"
							>
								<FontAwesomeIcon icon={["fab", "twitter-square"]} />
							</a>
						</li>
						<li>
							<a
								href="https://www.facebook.com/Two-Barrels-LLC-139918443308930/"
								alt="Facebook"
								title="Facebook"
								rel="noopener"
								target="_blank"
							>
								<FontAwesomeIcon icon={["fab", "facebook-square"]} />
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/company/two-barrels-llc/"
								alt="LinkedIn"
								title="LinkedIn"
								rel="noopener"
								target="_blank"
							>
								<FontAwesomeIcon icon={["fab", "linkedin"]} />
							</a>
						</li>
						<li></li>
					</ul>
				</div>
				<div className="privacy-policy">
					<ul>
						<li>
							<Link to="privacy-policy">Privacy Policy</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
