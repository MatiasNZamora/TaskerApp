import React from 'react'
import { Redirect, Route, useLocation } from 'react-router-dom'
import useAuth from '../Auth/useAuth';
import routes from '../helpers/routes';


export default function PrivateRoute({hasRole: role, ...rest}) {

    const location = useLocation()
    
    const { hasRole, isLogged } = useAuth();

    if(role && !hasRole(role)) return <Redirect to={routes.home} />  //comprobacion de admin
    
    if(!isLogged()) return <Redirect to={{pathname: routes.login, state: { from: location }}} />

    return (
        <Route {...rest}/>
    )
};


/*
    Lo que hace la funcion es: 
    Hace que el PrivateRoute retorne Route importado de react-router-doom y para que 
    se siga renderizando la ruta en props pasa los parametros  path, exact, components se
    los pase a PrivateRoute y el se los pasa a la ruta. 




    ahora en las propiedades vamos a estar resiviendo tambien el hasRole renombrado a role,
    ahora hacemos una comprobación si el role del usuario es diferente al role que indicamos en la ruta.

    if(role && user?.role !== role) return <Redirect to='/'/>  

    usamos los operadores para que solo lo busque o evalue si el role existe.

*/