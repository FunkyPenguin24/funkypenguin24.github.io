import Home from '../pages/Home';
import About from '../pages/About';
import Overview from '../pages/Overview';
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
            path: "projects/overview",
            element: <Overview />
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