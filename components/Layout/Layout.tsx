import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Menu from "../Header/Header";

const Layout = ({children} : {children: React.ReactNode}) => (

        <>
            {/*<Header/>*/}
            <Header/>
            {children}
            <Footer/>
            <div className="background-animation">
                <div id="ball-one"></div>
                <div id="ball-two"></div>
                <div id="ball-three"></div>
            </div>
        </>
);

export default Layout;