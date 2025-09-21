import { ChevronRight, Cloud, Code, DoneAll, East, Home, HomeOutlined, MobileScreenShare, Psychology, Verified } from '@mui/icons-material'
import './solutions.css'
import { BusinessSolutionsList, EmergingTechList, SoftwareDevelopmentList, technologiesList, TestingList } from '../../static/DummyData'
import Marquee from 'react-fast-marquee'

const Solutions = () => {
  return (
    <div className="solutions">
      <div className="solutions-top">
        <div className="solutions-left">
          <div className="navigation-steps">
            <HomeOutlined />
            <ChevronRight />
            <p>Solutions</p>
          </div>
          <div className="solutions-header">
            <p>SOFTWARE DEVELOPMENT SOLUTIONS</p>
            <h2>Tap into our end-to-end <br /><span className='orange-dot'>tech solutions.</span></h2>
          </div>
        </div>

        <div className="solutions-right">
          <img src="/assets/solutions.avif" alt="" />
        </div>
      </div>

      <div className="solutions-container">
        <div className="solutions-item">
          <Code sx={{color: "orangered", fontSize: {xs: 34, sm: 45}}} />
          <h3>Software Development & Design</h3>
          <div className="solutions-wrapper">
            {SoftwareDevelopmentList.map((solution) => (
              <div className="solution" key={solution.id}>
                <h4>{solution.title}</h4>
                <p>{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="solutions-item">
          <DoneAll sx={{color: "orange", fontSize: {xs: 34, sm: 45}}} />
          <h3>QA, Testing, Maintenance & Modernization</h3>
          <div className="solutions-wrapper">
            {TestingList.map((test) => (
              <div className="solution" key={test.id}>
                <h4>{test.title}</h4>
                <p>{test.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="solutions-item">
          <Cloud sx={{color: "royalblue", fontSize: {xs: 34, sm: 45}}} />
          <h3>Cloud & Advanced Technologies</h3>
          <div className="solutions-wrapper">
            {EmergingTechList.map((technology) => (
              <div className="solution" key={technology.id}>
                <h4>{technology.title}</h4>
                <p>{technology.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="solutions-item">
          <MobileScreenShare sx={{color: "tomato", fontSize: {xs: 34, sm: 45}}} />
          <h3>Business & Digital Solutions</h3>
          <div className="solutions-wrapper">
            {BusinessSolutionsList.map((solution) => (
              <div className="solution" key={solution.id}>
                <h4>{solution.title}</h4>
                <p>{solution.desc}</p>
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

export default Solutions