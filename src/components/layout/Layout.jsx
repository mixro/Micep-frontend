import './layout.css'
import Topbar from '../topbar/Topbar'
import Footer from '../footer/Footer'

const Layout = ({children}) => {
  return (
    <div className="layout-container">
        <div className="layout-topbar">
            <Topbar />
        </div>
        <div className="layout-body">
            <main>
                {children}
            </main>
        </div>
        <div className="layout-footer">
            <Footer />
        </div>
    </div>
  )
}

export default Layout