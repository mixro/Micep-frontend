import { Link } from 'react-router-dom'
import { successStories } from '../../static/DummyData'
import './success.css'

const Success = () => {
  return (
    <div className="success">
        <div className="success-top">
            <Link to='/' className="link-main">
                <div className="micep-logo-wrapper">
                    <div className="micep-logo-image">
                        <img src="/micep-logo.png" alt="MICEP LOGO" />
                    </div>
                    <p>Micep<span className='orange-dot'>DEV</span></p>
                </div>
            </Link>
            <div className="success-top-info">
                <h2>Thank you! <br />We're looking forward to connecting.</h2>
                <p>In the meantime, check out our latest news</p>
            </div>
        </div>
        <div className="success_stories">
            {successStories.map((story) => (
                <div className="success_stories_item" key={story._id}>
                    <div className="success_stories_image">
                        <img src="/assets/About_story-1.jpg" alt="SUCCESS" />
                    </div>
                    <div className="success_stories_info">
                        <h3>{story.title}</h3>
                        <p>{story.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Success