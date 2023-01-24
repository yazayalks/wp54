import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {FC, ReactNode} from "react";

type LayoutProps = {
    children: ReactNode,
}
const Layout: FC<LayoutProps> = ({children}) => (
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