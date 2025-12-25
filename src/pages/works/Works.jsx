import { ChevronRight, East, HomeOutlined, Search } from '@mui/icons-material'
import './works.css'
import { micepProjects } from '../../static/DummyData';
import { useState } from 'react';

const Works = () => {
    const [searchQuery, setSearchQuery] = useState("");
    
    const filteredWorks = micepProjects.filter((item) => {
        const workHeader = item.title.toLowerCase().includes(searchQuery)
        const workIndustry = item.industry.toLowerCase().includes(searchQuery)

        return workHeader || workIndustry
    })

  return (
    <div className="works">
        <div className="works-top">
            <h2>Showcasing our expertise<br /> <span className="orange-dot">through successful projects.</span></h2>
            <div className="works-search">
                <input type="text" onChange={(e) => setSearchQuery(e.target.value)} placeholder='Search by title or industry...' />
                <div className="works-search-icon">
                    <Search />
                </div>
            </div>
        </div>

        <div className="works-container">
            { filteredWorks.length > 0 
                ?  filteredWorks.map((work, index) => (
                        <div className="works-item" key={index}>
                            <div className="works-item-image">
                                <img src={work.img} alt="WORKS" />
                            </div>
                            <div className="works-item-desc">
                                <h3>{work.title}</h3>
                                <p>{work.desc}</p>
                                <div className="works-read-more">
                                    <button>Read More <East /> </button>
                                </div>
                            </div>
                        </div>
                    ))
                :
                    <div className="no_work">
                        <h3>No Project Available !!</h3>
                    </div>
            }
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