import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({children} : {children: React.ReactNode}) => (

        <>
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