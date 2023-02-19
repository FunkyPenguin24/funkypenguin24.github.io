import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Overview from '../pages/Overview';
import Downloads from '../pages/Downloads';
import Policies from '../pages/Policies';
import {createBrowserRouter} from 'react-router-dom'

export function initRouteTreeForProvider(){
    return createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "about",
            element: <About />,
        },
        {
            path: "projects",
            element: <Projects />,
        },
        {
            path: "projects/overview",
            element: <Overview />
        },
        {
            path: "projects/downloads",
            element: <Downloads />
        }, 
        {
            path: "projects/policies",
            element: <Policies />,
        },
        {
            path: "*",
            element: <div><h5>404: Nothing at this address</h5></div>
        }
    ]);
}