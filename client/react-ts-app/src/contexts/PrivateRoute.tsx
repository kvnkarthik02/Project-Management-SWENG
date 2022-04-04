import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'

// interface Props {
//     component: React.ComponentType;
// 

// interface Props {
//     element: React.ElementType;
// }

// export const PrivateRoute: React.FC<Props> = ({ element: RouteComponent }) => {
//     return <RouteComponent />
// }

// const PrivateRoute = ({component, isAuthenticated, ...rest}: any) => {
//     const routeComponent = (props: any) => (
//         isAuthenticated
//             ? React.createElement(component, props)
//             : <Navigate to={{pathname: '/login'}}/>
//     )
//     return <Route {...rest} render={routeComponent}/>;
// }

export type ProtectedRouteProps = {
    isAuthenticated: boolean,
    authenticationPath: string;
    outlet: JSX.Element;
}

export default function PrivateRoute({isAuthenticated, authenticationPath, outlet}: ProtectedRouteProps) {
    if (isAuthenticated) {
        return outlet;
    }
    else {
        return <Navigate to={{ pathname: authenticationPath }} />;
    }
};



// export default function PrivateRoute({ component: RouteComponent, ...rest }) {
//     const currentUser = useAuth();

//     if(currentUser) {
//         return <RouteComponent />
//     }
//     return <Navigate to="/" />
//     // return (
//     //     <Route
//     //     {...rest}
//     //     render={routeProps =>
//     //     !!currentUser ? (
//     //         <RouteComponent {...routeProps} currentUser={currentUser} />
//     //     ) : (
//     //         <Navigate to='/login'/>
//     //     )
//     //     }
//     //     />
//     // )
// }
