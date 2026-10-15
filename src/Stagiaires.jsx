import Sidebar from './sidebar.jsx'
import Header from './Header.jsx'
import Content from './Content.jsx'

function Stagiaires() {
    return (
        <>
            <Header />
            <div className="flex">
                <Sidebar />
                <Content />
            </div>
        </>
    )
}

export default Stagiaires