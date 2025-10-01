import './wrapper.css'

const Wrapper = ({children}) => {
  return (
    <div className="wrapper-component">
        <div className="wrapper-container">
            <main>
                {children}
            </main>
        </div>
    </div>
  )
}

export default Wrapper