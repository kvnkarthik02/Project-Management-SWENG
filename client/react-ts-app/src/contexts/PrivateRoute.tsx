import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'

// interface Props {
//     component: React.ComponentType;
// 

interface Props {
    element: React.ElementType;
}

export const PrivateRoute: React.FC<Props> = ({ element: RouteComponent }) => {
    return <RouteComponent />
}





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
