import { Header, Aside, Footer } from './components';
//import './layout.css'

const Layout = ({ children }) => {
    return (
        <div className="position">
            <Aside />
            <div className="main">
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    )
}

export { Layout }