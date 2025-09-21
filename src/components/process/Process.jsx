import "./process.css"
import { Call, CallMerge, CheckBox, GroupAdd } from '@mui/icons-material'
import { workingInfo } from '../../static/DummyData'

const Process = () => {
  return (
    <div className="process-component">
        <div className="working-section">
            <div className="working-header">
                <h2>No need to wonder.<br />Working with us is wonderful<span className="orange-dot">.</span> </h2>
            </div>
            <div className="working-items">
                {workingInfo.map((info) => (
                    <div className="working-item" key={info.id}>
                        <CheckBox sx={{ color: "#fa521f" }} />
                        <div className="working-details">
                            <h3>{info.title}</h3>
                            <p>{info.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="process-container">
            <div className="process-wrapper">
                <div className="process-header">
                    <h2>Our process. <br />Simple, seamless, <br />streamlined<span className="orange-dot">.</span></h2>
                </div>
                <div className="process-steps">
                    <div className="process-step">
                        <div className="process-connector"></div>
                        <div className="step-icon">
                            <Call sx={{fontSize: {xs: 22, sm: 26}}} />
                        </div>
                        <div className="step-details">
                            <span>STEP 1</span>
                            <h2>Join exploration call.</h2>
                            <p>Tell us more about your business on a discovery call. We’ll discuss team structure and approach, success criteria, timescale, budget, and required skill sets to see how we can help.</p>
                        </div>
                    </div>
                    <div className="process-step">
                        <div className="process-connector"></div>
                        <div className="step-icon">
                            <GroupAdd sx={{fontSize: {xs: 22, sm: 26}}} />
                        </div>
                        <div className="step-details">
                            <span>STEP 2</span>
                            <h2>Discuss solution and team structure.</h2>
                            <p>In a matter of days, we will finalize your project specifications, agree on an engagement model, select and onboard your team.</p>
                        </div>
                    </div>
                    <div className="process-step">
                        <div className="process-connector"></div>
                        <div className="step-icon">
                            <CallMerge sx={{fontSize: {xs: 22, sm: 26}}} />
                        </div>
                        <div className="step-details step-details-last">
                            <span>STEP 3</span>
                            <h2>Get started and track performance.</h2>
                            <p>Once we’ve agreed on milestones, we’ll immediately get to work. We’ll track progress, report updates, and continuously adapt to your needs.</p>
                        </div>
                    </div>
                    <div className="process-button">
                        <div className="process-button-border"></div>
                        <button>Schedule a Call</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="check-us">
            <div className="checkUs-image">
                <img src="/assets/bottom.avif" alt="PR" />
            </div>
            <div className="check-us-header">
                <h2>Want to accelerate software <br /> development at your company?<br /> <span className="orange-dot">See how we can help.</span></h2>
            </div>
            <div className="check-us-button">
                <button>Schedule a Call</button>
            </div>
        </div>
    </div>
  )
}

export default Process