import { ChevronRight, HomeOutlined, Search } from '@mui/icons-material'
import './technologies.css'
import { searchFilters, technologiesArray } from '../../static/DummyData'
import { useState } from 'react';

const Technologies = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filterCategory, setFilterCategory] = useState("");

    const filteredTechs = technologiesArray.filter((tech) => {
        const matchesSearch = tech.name.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory =
            (filterCategory === "" || filterCategory === "All")
            ? true
            : tech.category.toLowerCase() === filterCategory.toLowerCase();

        return matchesSearch && matchesCategory;
    });

    const groupByFirstLetter = (techs) => {
        return techs.reduce((acc, tech) => {
            const firstLetter = tech.letter.toUpperCase();
            if (!acc[firstLetter]) {
            acc[firstLetter] = [];
            }
            acc[firstLetter].push(tech);
            return acc;
        }, {});
    };

    const groupedTechs = groupByFirstLetter(filteredTechs); // filteredTechs is after search & category
    const sortedLetters = Object.keys(groupedTechs).sort();

    console.log(filteredTechs)

  return (
    <div className="technologies">
        <div className="tech-top">
            <div className="techTop-wrapper">
                <div className="techtop_cover">
                    <div className="techtop_cover_icon">
                        <img src='/assets/ai_logo.svg' className='AI' />
                    </div>
                    <div className="techtop_cover_icon">
                        <img src='/assets/c_logo.svg' className='AI' />
                    </div>
                    <div className="techtop_cover_icon">
                        <img src='/assets/ai_logo.svg' className='AI' />
                    </div>
                    <div className="techtop_cover_icon">
                        <img src='/assets/c_logo.svg' className='AI' />
                    </div>
                    <div className="techtop_cover_icon">
                        <img src='/assets/ai_logo.svg' className='AI' />
                    </div>
                    <div className="techtop_cover_icon">
                        <img src='/assets/ai_logo.svg' className='AI' />
                    </div>
                    <div className="techtop_cover_icon">
                        <img src='/assets/ai_logo.svg' className='AI' />
                    </div>
                    <div className="techtop_cover_icon">
                        <img src='/assets/ai_logo.svg' className='AI' />
                    </div>
                </div>
                <div className="tech-search">
                    <div className="navigation-steps tech-navigation-steps">
                        <HomeOutlined />
                        <ChevronRight />
                        <p>Technologies</p>
                    </div>
                    <div className="solutions-header tech-header">
                        <p>OUR TECH EXPERTISE</p>
                        <h2>What's your stack? <br /><span className='orange-dot'>We cover them all.</span></h2>
                    </div>
                    <div className="techSearch-input">
                        <Search />
                        <input type="text" onChange={(e) => setSearchQuery(e.target.value)} placeholder='Search technology name' />
                    </div>
                </div>
                <div className="techtop_cover techtop_cover_right">
                    <div className="techtop_cover_icon">
                        <img src='/assets/ai_logo.svg' className='AI' />
                    </div>
                    <div className="techtop_cover_icon">
                        <img src='/assets/ai_logo.svg' className='AI' />
                    </div>
                    <div className="techtop_cover_icon">
                        <img src='/assets/ai_logo.svg' className='AI' />
                    </div>
                    <div className="techtop_cover_icon">
                        <img src='/assets/ai_logo.svg' className='AI' />
                    </div>
                    <div className="techtop_cover_icon">
                        <img src='/assets/ai_logo.svg' className='AI' />
                    </div>
                    <div className="techtop_cover_icon">
                        <img src='/assets/ai_logo.svg' className='AI' />
                    </div>
                    <div className="techtop_cover_icon">
                        <img src='/assets/ai_logo.svg' className='AI' />
                    </div>
                </div>
            </div>
            <div className="tech-filters">
                <p className='bold'>Filter by:</p>
                <div className="tech-filters-wrapper">
                    {searchFilters.map((filter) => (
                        <div className={`tech-filter ${filterCategory.toLowerCase() === filter.name.toLowerCase() && 'filter-button-active'}`} key={filter.id}>
                            <button 
                                onClick={() => setFilterCategory(filter.name)}
                            >
                                {filter.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="tech-container">
            {sortedLetters.map((letter) => (
                <div className="tech-wrapper" key={letter}>
                    <div className="tech-first-letter">
                        <p>{letter}</p>
                    </div>

                    <div className="tech-list">
                        {groupedTechs[letter].map((tech) => (
                            <div className="tech-list-item" key={tech.id}>
                                <div className="tech-item-logo">
                                    <img src={`/assets/logos/${tech.image}_logo.svg`} alt={tech.name} />
                                </div>
                                <p>{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}            
        </div>
    </div>
  )
}

export default Technologies