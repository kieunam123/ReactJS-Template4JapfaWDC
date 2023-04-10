import {createBrowserRouter, Outlet} from 'react-router-dom';
import Start from '../screens/Start';
import Dashboard from '../screens/Dashboard';
import Report from '../screens/Report';

const AuthLayout = () => {
    return <Outlet/>
}

export default createBrowserRouter([
    {
        element: <AuthLayout/>,
        children: [
            {
                element: <Start/>,
                path: '/start',
            },
            {
                element: <Dashboard/>,
                path: '/'
            },
            {
                element: <Report/>,
                path: '/report',
            }
        ]
    }
])