import { ourPrinciples } from '../../static/DummyData'
import './about.css'

const About = () => {
  return (
    <div className="about-container">
        <div className="about-top">
            <h2>Creating innovative software solutions with Africa's finest talent.</h2>
        </div>

        <div className="about-item">
            <div className="about-desc">
                <h3>Our Mission</h3>
                <p>MICEP TECH strives to empower African businesses to unlock digital growth by leveraging elite talent. Software development teams play a vital role in driving their company’s innovation and profitability. To achieve this, you need a top-tier development and augmentation solution that can efficiently build software, enhance technical skills, and maximize revenue potential. The challenge is, the demand, scale, and complexity of projects can stretch the team and profit margins thin.</p>
                <h4 className="about-small-header">We believe talent should always drive your growth with innovation.</h4>
                <p>That’s why we don’t just offer top software solutions–we ensure their success. As part of the strongest network of African businesses relying on our elite talent approach, you can enhance digital capabilities and optimize performance aligned with your growth objectives and technical needs. Instead of facing uncertainty, you gain confidence and a committed partner for your progress. Take challenges off the table with MICEP TECH, and set your business on the firm path to innovation and profitability.</p>
            </div>

            <div className="about-image our-mission-img">
                <img src="/assets/about-us.jpg" alt="about us image" />
            </div>
        </div>

        <div className="about-item our-mission-section">
            <div className="about-image our-mission">
                <img src="/assets/About_story-1.jpg" alt="about story image" />
                <img src="/assets/About_leadership-1.jpg" className='LARGESCREEN' alt="about leadership image" />
            </div>

            <div className="about-desc our-mission-desc">
                <h3>Our Vision</h3>
                <p>In 2025, Joseph Chongola founded MICEP TECH to enhance software solutions for African businesses. As the digital landscape underwent rapid changes, traditional methods struggled to keep pace. His belief in a talent-driven approach propelled the company forward.</p>
                <p>MICEP TECH pioneers in leveraging elite African talent to build innovative software, using advanced tech to deliver scalable solutions. We now also support mobile app development, enhance cybersecurity, assist with UI/UX design, and help businesses block inefficiencies while promoting growth-friendly strategies.</p>
                <p>Our global team combines expertise in software development, project management, and African market insights to support pioneering firms continent-wide. We help eliminate technical challenges and uncertainty from their operations, empowering them to thrive in the ever-evolving digital landscape.</p>
            </div>

            <div className="SMALLSCREEN">
                <div className="about-image our-mission">
                    <img src="/assets/About_leadership-1.jpg" alt="about leadership image" />
                </div>
            </div>
        </div>

        {/* TO.DO: Add leadership team section here */}

        <div className="operating-principles">
            <h2>Our Operating Principles</h2>
            <div className="principles-list">
                {ourPrinciples.map((principle) => (
                    <div className="principle-item" key={principle.id}>
                        <h3>{principle.title}</h3>
                        <p>{principle.desc}</p>
                    </div>
                ))}        
            </div>
        </div>

        <div className="join-us">
            <h2>Want to join us? We’re expanding our talent across Africa’s regions.</h2>
            <div className="join-us-button">
                <button>Join Us</button>
            </div>
        </div>
    </div>
  )
}

export default About