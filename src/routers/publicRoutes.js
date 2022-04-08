import { Navigate, Outlet } from "react-router-dom";
import Layout from '../components/layout/Layout';
import CompanyDetails from "../feautures/companyDetails/views/CompanyDetails";

const PublicApp = () => {
    return <Layout>
        <Outlet></Outlet>
    </Layout>
}

export const publicRoutes = [
    {
        path: '/',
        element: <Navigate to="app/cd" />
    },
    {
        path: window.baseUrl,
        element: <Navigate to="app/cd" />
    },
    {
        path: '/app',
        element: <PublicApp />,
        children: [
            {
                path: 'cd',
                element: <CompanyDetails></CompanyDetails>,
            }
        ]
    },
]