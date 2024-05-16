import React, { useState, useEffect } from 'react';
import './Footer.css';
import youtube_icon from '../../assets/youtube_icon.png';
import twitter_icon from '../../assets/twitter_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';
import facebook_icon from '../../assets/facebook_icon.png';

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        // This will update the year only once when the component mounts
        setCurrentYear(new Date().getFullYear());
    }, []); // The empty array causes this effect to only run on mount

    return (
        <div className='footer'>
            <div className="footer-icons">
                <img src={facebook_icon} alt="Facebook" />
                <img src={instagram_icon} alt="Instagram" />
                <img src={twitter_icon} alt="Twitter" />
                <img src={youtube_icon} alt="YouTube" />
            </div>
            <ul>
                <li>Audio Description</li>
                <li>Help Center</li>
                <li>Gift Cards</li>
                <li>Media Center</li>
                <li>Investor Relations</li>
                <li>Jobs</li>
                <li>Terms of Use</li>
                <li>Privacy</li>
                <li>Legal Notices</li>
                <li>Cookie Preferences</li>
                <li>Corporate Information</li>
                <li>Contact Us</li>
            </ul>
            <p className='copyright-text'>© 1997-{currentYear} Netflix Inc.</p>
        </div>
    );
}

export default Footer;
