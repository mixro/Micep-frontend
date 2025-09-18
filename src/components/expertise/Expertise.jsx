import './expertise.css'
import * as Icons from "@mui/icons-material";
import { expertiseList } from '../../static/DummyData'
import React from 'react';

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
                        <p>{expert.desc}</p>
                    </div>
                    );
                })}                
            </div>
        </div>

        <div className="expertise-bottom"></div>
    </div>
  )
}

export default Expertise