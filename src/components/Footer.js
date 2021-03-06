import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'


function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join our community to receive updates on cars!
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe anytime
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Email Address" className="footer-input"/>
                        <Button buttonStyle="btn--outline">Join</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
              <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                  <h2>About Us</h2>
                  <Link to='/sign-up'>How it works</Link>
                  <Link to='/'>Testimonials</Link>
                  <Link to='/'>Careers</Link>
                  <Link to='/'>Investors</Link>
                  <Link to='/'>Terms of Service</Link>
                </div>
                <div className='footer-link-items'>
                  <h2>Contact Us</h2>
                  <Link to='/'>Contact</Link>
                  <Link to='/'>Support</Link>
                  <Link to='/'>Destinations</Link>
                  <Link to='/'>Sponsorships</Link>
                </div>
              </div>
              <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                  <h2>Videos</h2>
                  <Link to='/'>Submit Video</Link>
                  <Link to='/'>Ambassadors</Link>
                  <Link to='/'>Agency</Link>
                  <Link to='/'>Influencer</Link>
                </div>
                <div className='footer-link-items'>
                  <h2>Social Media</h2>
                  <Link to='/'>Instagram</Link>
                  <Link to='/'>Facebook</Link>
                  <Link to='/'>Youtube</Link>
                  <Link to='/'>Twitter</Link>
                </div>
              </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            Car Rush&nbsp;<i className="fas fa-car"></i>
                        </Link>
                    </div>
                    <small className="website-rights">
                        Car rush &copy; 2021
                    </small>
                    <div className="social-icons">
                        <Link to="/" target="_blank" className="social-icon-link facebook" aria-label='Facebook'>
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="/" target="_blank" className="social-icon-link instagram" aria-label='Instagram'>
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to="/" target="_blank" className="social-icon-link youtube" aria-label='Youtube'>
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link to="/" target="_blank" className="social-icon-link twitter" aria-label='Twitter'>
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to="/" target="_blank" className="social-icon-link linkedin" aria-label='Linkedin'>
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
