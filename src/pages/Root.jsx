import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
 
export default Root;