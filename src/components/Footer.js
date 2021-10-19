import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitterSquare, faFacebookSquare, faTumblrSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    library.add ()
    const twitterIcon = <FontAwesomeIcon icon={faTwitterSquare} />;
    const facebookIcon = <FontAwesomeIcon icon={faFacebookSquare}/>;
    const tumblerIcon = <FontAwesomeIcon icon={faTumblrSquare}/>;
    const linkedInIcon = <FontAwesomeIcon icon={faLinkedin}/>;

    return (
        <div className='footer__container'>
            <div className='row'>
                <div className='footer__container--footer-text'>
                    <p>522 W. Riverside Ave</p>
                    <p>Spokane, WA 99201</p>
                    <p>
                        <a href="tel:5093151149">(509) 315-1149</a>
                    </p>
                </div>
                <div className='footer__container--socials'>
                    <ul>
                        <li><a href="https://twitter.com/GiveEm2Barrels" alt="Twitter" title="Twitter" rel="noopener" target="_blank">{twitterIcon}</a></li>
                        <li><a href="https://www.facebook.com/Two-Barrels-LLC-139918443308930/" alt="Facebook" title="Facebook" rel="noopener" target="_blank">{facebookIcon}</a></li>
                        <li><a href="https::/giveemtwobarrels.tumblr.com/" alt="Tumblr" title="Tumblr" rel="noopener" target="_blank">{tumblerIcon}</a></li>
                        <li><a href="https::/giveemtwobarrels.tumblr.com/" alt="Tumblr" title="Tumblr" rel="noopener" target="_blank">{linkedInIcon}</a></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;