import { East } from '@mui/icons-material'
import "./call.css"
import { Link } from 'react-router-dom'

const Call = () => {
  return (
    <div className="call">
        <div className="call-left">
            <div className="call-micep-">
                <div className="micep-logo-wrapper">
                    <div className="micep-logo-image">
                        <img src="/micep-logo.png" alt="MICEP LOGO" />
                    </div>
                    <p>Micep<span className='orange-dot'>DEV</span></p>
                </div>
            </div>
            <div className="call-welcome">
                <h2>Thank you for your interest in MicepDev.</h2>
                <p>We’d like to ask you a few questions to better understand your software development needs.</p>
            </div>
            <div className="call-user-inputs">
                <div className="call-user-item">
                    <label>Your Name</label>
                    <input type="text" placeholder='Your name' />
                </div>
                <div className="call-user-item">
                    <label>Your work email</label>
                    <input type="text" placeholder='Your work email' />
                </div>
                <div className="call-user-item">
                    <label>Select your service</label>
                    <div className="call-user-radios">
                        <div className="call-user-radio">
                            <input type="radio" id='staffAugmentantion' name='service' />
                            <label htmlFor='staffAugmentantion'>Staff Augmentantion</label>
                        </div>
                        <div className="call-user-radio">
                            <input type="radio" id='dedicatedTeams' name='service' />
                            <label htmlFor='dedicatedTeams'>Dedicated Teams</label>
                        </div>
                        <div className="call-user-radio">
                            <input type="radio" id='SoftwareOutsourcing' name='service' />
                            <label htmlFor='SoftwareOutsourcing'>Software Outsourcing</label>
                        </div>
                    </div>
                </div>
                <div className="call-user-item">
                    <label>How can we help?</label>
                    <textarea placeholder='Tell us how can we help'></textarea>
                </div>
            </div>
            <div className="call-user-button">
                <Link to='/success' className='link-main'>
                    <button>Get Started <East /></button>
                </Link>
            </div>
            <div className="LARGESCREEN">
                <div className="call-footer">
                    <p>Privacy Policy</p>
                    <p>Terms of service</p>
                </div>
            </div>
        </div>

        <div className="call-right">
            <div className="call-quote">
                <p>Thanks to the people from BairesDev. They can find talented, high-caliber, sharp developers who will stay with us long-term. Their main strength is their talent.”</p>
                <p className="text-align-right orange-dot">Johnson<br />&Johnson</p>
                <p className="text-align-right">David Johnston</p>
                <p className="text-align-right">Product Engagement Lead</p>
                <div className="quotation_marks">“</div>
            </div>
            <div className="SMALLSCREEN">
                <div className="call-footer">
                    <p>Privacy Policy</p>
                    <p>Terms of service</p>
                </div>
            </div>
            <div className="clip-path-right"></div>            
        </div>
    </div>
  )
}

export default Call