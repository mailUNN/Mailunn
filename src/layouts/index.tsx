import { lazy } from "react";
import { Navbar } from "./navbar";
const Layout = ({children}:any)=>{

    return (
        <div className='app-page'>
            <Navbar/>
            <div className='app-main'>
                {children}
            </div>
        </div>
    );
}

export default Layout;