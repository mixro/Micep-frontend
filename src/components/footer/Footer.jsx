import './footer.css'
import { Link } from "react-router-dom";
import { Call, East, Facebook, Instagram, LinkedIn, Mail, X } from '@mui/icons-material'

const Footer = () => {
  return (
    <div className="footer-component">
      <div className="footer-left">
        <div className="footer-logo">
          <div className="topbar-left">
            <Link to='/' className="link-main">
              <div className="topbar-logo-container">
                <div className="topbar-logo">
                  <img src="/micep-logo.png" alt="MICEP LOGO" />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="footer-wrapper">
          <div className="footer-links">
            <div className="footer-links-item">
              <h3>Discover MicepDev</h3>
              <div className="footer-link">
                <ul>
                  <li>About Us</li>
                  <li>Methodologies</li>
                  <li>Technologies</li>
                  <li>Certifications</li>
                  <li>Software Development Service</li>
                  <li>Software Development Solutions</li>
                  <li>Diversity</li>
                  <li>Social Responsibility</li>
                </ul>
              </div>
            </div>
            <div className="footer-links-item">
              <h3>Resocurces<span className='orange-dot'>.</span></h3>
              <div className="footer-link">
                <ul>
                  <li>Case Studies</li>
                  <li>Blog</li>
                  <li>Press</li>
                  <li>Industries Insights</li>
                  <li>Technologies Resoures Center</li>
                </ul>
              </div>
            </div>
            <div className="footer-links-item">
              <h3>Careers<span className='orange-dot'>.</span></h3>
              <div className="footer-link">
                <ul>
                  <li>Job Opportunites</li>
                  <li>Talent Referrals</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-below">
            <div className="footer-below-policy">
              <p className='footer-policy-item'>Privacy Policy</p>
              <p className='footer-policy-item'>Terms of Service</p>
              <p>Do Not Sell My Personal Information</p>
            </div>
            <div className="footer-below-rights">
              <p>MICEP<span className='orange-dot'>DEV</span>® 2018 - 2025. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-right-top">
          <h3>Get in touch<span className='orange-dot'>.</span></h3>
          <div className="footer-buttons">
            <button className='footer-contact-button'>Contact Us</button>
            <button className='footer-call-button'>Schedule a Call <East /></button>
          </div>
          <div className="footer-call">
            <Call />
            <a href='tel: +255622739599' className='link-main'>
              +(255) 622 739 599
            </a>
          </div>
        </div>

        <div className="footer-right-middle">
          <h4>Get insights from the experts on building and scaling technology teams.</h4>
          <p>Your e-mail address</p>
          <div className="footer-subscription">
            <input type="email" placeholder='name@email.com' />
            <button className='footer-contact-button'>Subscribe <Mail /></button>
          </div>
          <div className="footer-subscription-checkbox">
            <input type="checkbox" />
            <p>By subscribing I accept the Privacy Policy.</p>
          </div>
        </div>

        <div className="footer-right-bottom">
          <h3>Follow us<span className='orange-dot'>.</span></h3>
          <div className="social-icons">
            <Link className='link-main'>
              <LinkedIn />
            </Link>
            <Link className='link-main'>
              <Facebook />
            </Link>
            <Link className='link-main'>
              <X />
            </Link>
            <Link className='link-main'>
              <Instagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer