import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Loading from "./components/loading/loading"; // Import your Loading component
import './app.css';

function App() {
    const location = useLocation();
    const [resourcesLoaded, setResourcesLoaded] = useState(false);

    useEffect(() => {
        // Simulate loading by adding a timeout
        const loadingTimeout = setTimeout(() => {
            setResourcesLoaded(true);
        }, 3000); // Adjust the timeout duration as needed

        // Clear the timeout when the component unmounts
        return () => clearTimeout(loadingTimeout);
    }, []);

    return (
        <div>
            {resourcesLoaded ? (
                <>
                    <Navbar />
                    <Outlet />
                    <Footer />
                </>
            ) : (
                <Loading />
            )}
        </div>
    );
}

export default App;
