import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { initRouteTreeForProvider } from "./common/router";
import MainLayout from "./layouts/MainLayout";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);
    const routerForProvider = initRouteTreeForProvider();
    return (
        <>
            <MainLayout darkModeEnabled={darkModeEnabled}>
                <RouterProvider router={routerForProvider} />
            </MainLayout>
        </>
    );
}

export default App;
