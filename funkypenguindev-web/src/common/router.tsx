import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Downloads from '../pages/About';
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
            path: "projects/downloads",
            element: <Downloads />
        }, 
        {
            path: "projects/policies",
            element: <Policies />,
        }
    ]);
}