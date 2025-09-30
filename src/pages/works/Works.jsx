import { ChevronRight, East, HomeOutlined, Search } from '@mui/icons-material'
import './works.css'

const Works = () => {
  return (
    <div className="works">
        <div className="works-top">
            <h2>Showcasing our expertise<br /> <span className="orange-dot">through successful projects.</span></h2>
            <div className="works-search">
                <input type="text" placeholder='Search by technology, industry, or solution...' />
                <div className="works-search-icon">
                    <Search />
                </div>
            </div>
        </div>

        <div className="works-container">
            <div className="works-item">
                <div className="works-item-image">
                    <img src="/assets/about-cover.jpg" alt="WORKS" />
                </div>
                <div className="works-item-desc">
                    <h3>HIPAA-Compliant Provider-to-Provider Telehealth Platform for Scalable Behavioral Care Delivery</h3>
                    <div className="works-read-more">
                        <button>Read More <East /> </button>
                    </div>
                </div>
            </div>
            <div className="works-item">
                <div className="works-item-image">
                    <img src="/assets/desktop.jpg" alt="WORKS" />
                </div>
                <div className="works-item-desc">
                    <h3>HIPAA-Compliant Provider-to-Provider Telehealth Platform for Scalable Behavioral Care Delivery</h3>
                    <div className="works-read-more">
                        <button>Read More <East /> </button>
                    </div>
                </div>
            </div>
            <div className="works-item">
                <div className="works-item-image">
                    <img src="/assets/about-cover-1.jpg" alt="WORKS" />
                </div>
                <div className="works-item-desc">
                    <h3>HIPAA-Compliant Provider-to-Provider Telehealth Platform for Scalable Behavioral Care Delivery</h3>
                    <div className="works-read-more">
                        <button>Read More <East /> </button>
                    </div>
                </div>
            </div>
            <div className="works-item">
                <div className="works-item-image">
                    <img src="/assets/about-cover.jpg" alt="WORKS" />
                </div>
                <div className="works-item-desc">
                    <h3>HIPAA-Compliant Provider-to-Provider Telehealth Platform for Scalable Behavioral Care Delivery</h3>
                    <div className="works-read-more">
                        <button>Read More <East /> </button>
                    </div>
                </div>
            </div>
            <div className="works-item">
                <div className="works-item-image">
                    <img src="/assets/desktop.jpg" alt="WORKS" />
                </div>
                <div className="works-item-desc">
                    <h3>HIPAA-Compliant Provider-to-Provider Telehealth Platform for Scalable Behavioral Care Delivery</h3>
                    <div className="works-read-more">
                        <button>Read More <East /> </button>
                    </div>
                </div>
            </div>
            <div className="works-item">
                <div className="works-item-image">
                    <img src="/assets/about-cover-1.jpg" alt="WORKS" />
                </div>
                <div className="works-item-desc">
                    <h3>HIPAA-Compliant Provider-to-Provider Telehealth Platform for Scalable Behavioral Care Delivery</h3>
                    <div className="works-read-more">
                        <button>Read More <East /> </button>
                    </div>
                </div>
            </div>
            <div className="works-item">
                <div className="works-item-image">
                    <img src="/assets/about-cover.jpg" alt="WORKS" />
                </div>
                <div className="works-item-desc">
                    <h3>HIPAA-Compliant Provider-to-Provider Telehealth Platform for Scalable Behavioral Care Delivery</h3>
                    <div className="works-read-more">
                        <button>Read More <East /> </button>
                    </div>
                </div>
            </div>
            <div className="works-item">
                <div className="works-item-image">
                    <img src="/assets/desktop.jpg" alt="WORKS" />
                </div>
                <div className="works-item-desc">
                    <h3>HIPAA-Compliant Provider-to-Provider Telehealth Platform for Scalable Behavioral Care Delivery</h3>
                    <div className="works-read-more">
                        <button>Read More <East /> </button>
                    </div>
                </div>
            </div>
            <div className="works-item">
                <div className="works-item-image">
                    <img src="/assets/about-cover-1.jpg" alt="WORKS" />
                </div>
                <div className="works-item-desc">
                    <h3>HIPAA-Compliant Provider-to-Provider Telehealth Platform for Scalable Behavioral Care Delivery</h3>
                    <div className="works-read-more">
                        <button>Read More <East /> </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="check-us">
            <div className="checkUs-image">
                <img src="/assets/bottom.avif" alt="PR" />
            </div>
            <div className="check-us-header">
                <h2>Brands like <span className='orange-dot'>Flame Luxury</span> already <br />accelerate their roadmaps with us. <br />Discover if we're a good fit for you.</h2>
            </div>
            <div className="check-us-button">
                <button>Schedule a Call</button>
            </div>
        </div>
    </div>
  )
}

export default Works