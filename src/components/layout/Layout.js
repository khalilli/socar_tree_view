import Navbar from "./Navbar";

const Layout = (props) => 
        <div className="app">
            <Navbar />
            {props.children}
        </div>;

export default Layout;