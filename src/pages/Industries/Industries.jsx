import { ChevronRight, East, HomeOutlined } from '@mui/icons-material'
import './industries.css'
import { industriesList, technologiesList } from '../../static/DummyData'
import Marquee from 'react-fast-marquee'

const Industries = () => {
  return (
    <div className="industries">
        <div className="solutions-top">
            <div className="solutions-left">
            <div className="navigation-steps">
                <HomeOutlined />
                <ChevronRight />
                <p>Industries</p>
            </div>
            <div className="solutions-header industries_header">
                <p>INDUSTRIES WE WORK IN</p>
                <h2>What's your Industry? <br /><span className='orange-dot'>We cover them all.</span></h2>
            </div>
            </div>

            <div className="solutions-right">
                <img src="/assets/industries.avif" alt="" />
            </div>
        </div>

        <div className="solutions-container">
            <div className="solutions-item">
                <div className="solutions-wrapper industries-wrapper">
                    {industriesList.map((industry) => (
                        <div className="solution" key={industry.id}>
                            <h4>{industry.title}</h4>
                            <p>{industry.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="tech-stack solution-tech-stack">
            <div className="techStack-top">
                <h2>Yes. We cover your tech stack<span className='orange-dot'>.</span></h2>
                <div className="techStack-desc">
                    <p>Our 4,000+ team has expertise in almost every programming language.</p>
                </div>
            </div>
            <div className="techStack-marquee">
                <Marquee direction="left" className='marquee-top' speed={35} gradient={false} pauseOnHover>
                    {technologiesList.slice(0, 22).map((tech) => (
                        <div className="marquee-item" key={tech.id}>
                            <p>{tech.name}</p>
                        </div>                      
                    ))}
                </Marquee>
                <Marquee direction="right" speed={35} gradient={false} pauseOnHover>
                    {technologiesList.slice(23, 43).map((tech) => (
                        <div className="marquee-item" key={tech.id}>
                            <p>{tech.name}</p>
                        </div>                      
                    ))}
                </Marquee>
            </div>
            <div className="techStack-link">
                <div className="techStack-stack-item">
                    <p>Our full repertoire</p>
                    <East />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Industries