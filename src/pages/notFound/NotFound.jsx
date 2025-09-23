import './notFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="notFound-container">
        <div className="notFound-image">
            <img src="/assets/not-found.png" alt="NOT FOUND" />
        </div>
        <Link to='/' className='link-main'>
            <button>GO TO DASHBOARD</button>
        </Link>
    </div>
  )
}

export default NotFound