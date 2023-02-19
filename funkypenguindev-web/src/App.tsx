import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { initRouteTreeForProvider } from "./common/router";
import MainLayout from "./layouts/MainLayout";

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
