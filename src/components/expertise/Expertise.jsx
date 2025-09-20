import './expertise.css'
import * as Icons from "@mui/icons-material";
import { expertiseList, technologiesList } from '../../static/DummyData'
import React from 'react';
import Marquee from "react-fast-marquee";

const Expertise = () => {
  return (
    <div className="expertise">
        <div className="expertise-top">
            <div className="expertise-header">
                <h2>From Concept to <br /> Completion: Our Full-Stack Expertise<span className='orange-dot'>.</span></h2>
                <div className="expertise-header-link">
                    <p>Everything we do</p>
                    <Icons.East sx={{fontSize: 22}} />
                </div>
            </div>
            <div className="expertise-container">
                {expertiseList.map((expert) => {
                    const IconComponent = Icons[expert.icon];
                    return (
                        <div className="expertise-item" key={expert._id}>
                            <div className="expertise-icon">
                                <IconComponent sx={{ fontSize: 40, color: expert.color }} />
                            </div>
                            <h3>
                                {expert.title.map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </h3>
                            <p className='expert-desc'>{expert.desc}</p>
                        </div>
                    );
                })}                
            </div>
            <div className="clip-bottom-circle">
            </div>
        </div>

        <div className="expertise-bottom">
            <div className="expertise-card">
                <div className="expertise-card-top">
                    <p>As featured in...</p>
                    <div className="experties-card-sources">
                        <p>CNBC</p>
                        <p>INSIDER</p>
                        <p>Forbes</p>
                        <p>Bloomberg</p>
                    </div>
                </div>
                <div className="expertise-card-body">
                    <div className="expertise-card-left">
                        <h3>FINANCIAL <br/> TIMES</h3>
                    </div>

                    <div className="expertise-card-right">
                        <p>We were recognized by Financial Times in the America's Fastest-growing Companies list of 2024, showcasing significant revenue growth between 2019 and 2022.</p>
                    </div>
                </div>
                <div className="expertise-card-bottom">
                    <div className="expertise-card-arrows">
                        <Icons.ChevronLeft />
                        <p>Previous</p>
                    </div>
                    <div className="expertise-card-bulletes">
                        <div className="expertise-bullete"></div>
                        <div className="expertise-bullete"></div>
                        <div className="expertise-bullete"></div>
                        <div className="expertise-bullete"></div>
                        <div className="expertise-bullete"></div>
                    </div>
                    <div className="expertise-card-arrows">
                        <p>Next</p>
                        <Icons.ChevronRight />
                    </div>
                </div>
            </div>
        </div>

        <div className="tech-stack">
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
                    <Icons.East />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Expertise